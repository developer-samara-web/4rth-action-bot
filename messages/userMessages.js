// Сообщение "Профиль пользователя"
export async function profileMessage(user) {
    return (`👤 <b>Ваш профиль:</b>\n\n📌 <b>Имя:</b> ${user.first_name}\n📧 <b>Username:</b> @${user.username || 'не указан'}\n🆔 <b>ID:</b> <code>${user.telegram_id}</code>\n\n🔔 <b>Premium подписка:</b> ${user.is_subscription ? 'Активна' : 'Не активна'}\n📅 <b>Срок действия:</b> ${user.subscription_end_date ? `до ${user.subscription_end_date}` : 'Не активна'}\n🔄 <b>Автопродление:</b> ${user.is_auto_subscription ? 'Активно' : 'Не активно'}\n\nИспользуйте меню ниже, чтобы управлять подпиской или вернуться в главное меню.`);
}

// Сообщение "Настройка подписки пользователя"
export async function subscribeUserMessage(user) {
    return (`🔔 <b>Управление подпиской:</b>\n\n🔔 <b>Ваша подписка:</b> ${user.is_subscription ? 'Активна' : 'Не активна'}\n🔄 <b>Автопродление:</b> ${user.is_auto_subscription ? 'Активно' : 'Не активно'}\n\n<b>Вы можете:</b>\n- Отключить автопродление\n- Вернуться в главное меню\n\n<b>Используйте кнопки ниже, чтобы управлять подпиской.</b>`);
}