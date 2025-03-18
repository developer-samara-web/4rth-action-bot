// Импорт
import { Markup } from "telegraf";

// Клавиатура "Главное меню"
export function startKeyboard() {
    return Markup.inlineKeyboard([
        [Markup.button.callback("👤 Мой Профиль", "user_profile")],
        [Markup.button.callback("🔥 2 дня за 1 рубль 🔥", "user_premium_1")],
        [Markup.button.callback("⭐️ Премиум подписка ⭐️", "user_premium")]
    ]);
}

// Клавиатура "Правила"
export function rulesKeyboard() {
    return Markup.inlineKeyboard([
        [Markup.button.callback("✅ Принять", `rules_accept`)]
    ]);
}

// Клавиатура "Подтверждении правил"
export function rulesAcceptKeyboard() {
    return Markup.inlineKeyboard([
        [Markup.button.callback("🚀 Начать", "start_menu")]
    ]);
}

// Клавиатура "Ошибка"
export function errorKeyboard() {
    return Markup.inlineKeyboard([
        [Markup.button.callback("🚀 Главное меню", "start_menu")]
    ]);
}
