package com.example

import io.ktor.http.HttpStatusCode
import io.ktor.server.application.*
import io.ktor.server.request.receive
import io.ktor.server.response.respond
import io.ktor.server.routing.delete
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import org.jetbrains.exposed.v1.r2dbc.R2dbcDatabase
import org.jetbrains.exposed.v1.r2dbc.SchemaUtils
import org.jetbrains.exposed.v1.r2dbc.transactions.suspendTransaction

suspend fun Application.configureExposed() {
    val database = R2dbcDatabase.connect(
        url = environment.config.property("database.url").getString(),
        user = environment.config.property("database.user").getString(),
        password = environment.config.property("database.password").getString()
    )

    suspendTransaction(database) {
        SchemaUtils.create(ExposedMessageService.Messages)
    }

    val messageService = ExposedMessageService(database)

    routing {
        post("/api/message") {
            val message = call.receive<ExposedMessage>()
            val id = messageService.create(message)
            log.info("New message with id: $id")
            call.respond(HttpStatusCode.Created, id)
        }

        get("/api/message/{id}") {
            val id = call.parameters["id"]?.toUInt() ?: throw IllegalArgumentException("Invalid ID")
            val message = messageService.read(id)
            if (message != null) {
                log.info("Message found with id: $id")
                call.respond(HttpStatusCode.OK, message)
            } else {
                call.respond(HttpStatusCode.NotFound)
            }
        }

        delete("/api/message/{id}") {
            val id = call.parameters["id"]?.toUInt() ?: throw IllegalArgumentException("Invalid ID")
            messageService.delete(id)
            log.info("Message deleted with id: $id")
            call.respond(HttpStatusCode.NoContent)
        }
    }
}
