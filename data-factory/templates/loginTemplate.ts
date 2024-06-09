import { faker } from "@faker-js/faker";
import { ConfigReader } from "../../config-reader/config.reader";
import { DataFactory, TemplateMap } from "../DataFactory";
import { LoginEntity } from "../entities/LoginEntity";

export class LoginTemplate extends DataFactory<LoginEntity> {
    protected templates: TemplateMap<LoginEntity> = {
        invalidUser: () => ({
            user: "invalidUser@gmail.com",
            password: ConfigReader.PASSWORD
        }),
        invalidPassword: () => ({
            user: faker.internet.email(),
            password: "invalidPassword"
        }),
        fakerUserAndPassword: () => ({
            user: faker.internet.email(),
            password: faker.internet.password()
        })
    };
}