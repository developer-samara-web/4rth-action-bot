// Сообщение профиля пользователя
export default async (ctx) => {
	return (`<b>👤 Профиль пользователя:</b>\n\n<b>🚀 Подписка Premium:</b> {status}\n<b>📅 Срок действия:</b> {date}\n<b>🔄 Автопродление:</b> {status}`)
}