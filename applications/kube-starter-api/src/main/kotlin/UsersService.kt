package com.example

import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.singleOrNull
import kotlinx.serialization.Serializable
import org.jetbrains.exposed.v1.core.*
import org.jetbrains.exposed.v1.core.dao.id.UIntIdTable
import org.jetbrains.exposed.v1.r2dbc.*
import org.jetbrains.exposed.v1.r2dbc.transactions.suspendTransaction
import org.jetbrains.exposed.v1.r2dbc.R2dbcDatabase

@Serializable
data class ExposedMessage(val message: String)

class ExposedMessageService(val database: R2dbcDatabase) {
    object Messages : UIntIdTable() {
        val message = varchar("message", length = 1000)
    }

    suspend fun create(message: ExposedMessage): UInt = suspendTransaction(database) {
        val newRecord = Messages.insert {
            it[Messages.message] = message.message
        }
        newRecord[Messages.id].value
    }

    suspend fun read(id: UInt): ExposedMessage? {
        return suspendTransaction(database) {
            Messages.selectAll()
                .where { Messages.id eq id }
                .map { ExposedMessage(it[Messages.message]) }
                .singleOrNull()
        }
    }

    suspend fun delete(id: UInt) {
        suspendTransaction(database) { Messages.deleteWhere { Messages.id.eq(id) } }
    }
}
