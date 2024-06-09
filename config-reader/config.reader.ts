
import { DeepReadonly } from 'ts-essentials';
import config from '../env.config.json';

type ConfigVars = DeepReadonly<typeof config>;
type Environment = keyof typeof config;

export class ConfigReader {
  private static readonly _envVars: ConfigVars = config;

  static getEnvVars(environment: Environment = process.env.env as Environment || 'prod'): Readonly<ConfigVars[Environment]> {
    const env = this._envVars[environment];
    if (!env) {
      throw new Error(`Invalid environment: ${String(environment)}`);
    }
    return Object.freeze(env);
  }

  static get APP_URL(): string {
    return ConfigReader.getEnvVars().APP_URL;
  }

  static get USER(): string {
    return ConfigReader.getEnvVars().USER;
  }

  static get PASSWORD(): string {
    return ConfigReader.getEnvVars().PASSWORD;
  }
}