import Scheduler from "@ioc:Adonis/Addons/Scheduler"
import TelegramTest from "Commands/TelegramTest";

Scheduler.command(TelegramTest).everyTenSeconds();