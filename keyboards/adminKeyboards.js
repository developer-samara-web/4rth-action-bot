// Импорт
import { Markup } from "telegraf";

// Клавиатура "Панель администратора"
export function adminKeyboard() {
    return Markup.inlineKeyboard([
        [Markup.button.webApp("🛠️ Создать акцию", `${process.env.TELEGRAM_WEBAPP}/promotions/create`)],
        [Markup.button.webApp("📝 Редактировать акцию", `${process.env.TELEGRAM_WEBAPP}/promotions/edit`)]
    ]);
}