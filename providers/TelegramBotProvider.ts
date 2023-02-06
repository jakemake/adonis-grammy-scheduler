import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
|
| Your application is not ready when this file is loaded by the framework.
| Hence, the top level imports relying on the IoC container will not work.
| You must import them inside the life-cycle methods defined inside
| the provider class.
|
| @example:
|
| public async ready () {
|   const Database = this.app.container.resolveBinding('Adonis/Lucid/Database')
|   const Event = this.app.container.resolveBinding('Adonis/Core/Event')
|   Event.on('db:query', Database.prettyPrint)
| }
|
*/
import { Bot } from 'grammy'
export default class TelegramBotProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    this.app.container.singleton('Telegram/Bot', () => {
      // telegram bot name @grammy_scheduler_bot
      const botApi = '5932656414:AAF9FlESu6mFfhsPXcvFvY5FE2NPVbZYYH8'

      return new Bot(botApi)
    })
    // Register your own bindings
  }

  public async boot() {
    // All bindings are ready, feel free to use them
  }
  
}
