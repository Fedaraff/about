function styletime(){

const div = document.querySelector('div')

// Получить текущее время
const currentTime = new Date()

// Для примера добавим переключение через 3 сек
// На деле просто устанавливаются часы
const targetTime = new Date()
targetTime.setSeconds(currentTime.getSeconds() + 3)

// Вычислить разницу между currentTime и targetTime
const diff = targetTime.valueOf() - currentTime.valueOf()

// Запустить перестановку класса в необходимое время
setTimeout(() => {
  div.classList.remove('absolute h-6 w-6 -bottom-1 -right-1 border-[4px] border-dark-500 rounded-full bg-dnd')
  div.classList.add('absolute h-6 w-6 -bottom-1 -right-1 border-[4px] border-dark-500 rounded-full bg-idle')
}, diff)


}