import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { useAppSelector } from '..'

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    courses: {
      modules: [
        {
          id: '1',
          title: 'Iniciando com React',
          lessons: [
            { id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' },
            {
              id: 'w-DW4DhDfcw',
              title: 'Estilização do Post',
              duration: '10:05',
            },
            {
              id: 'D83-55LUdKE',
              title: 'Componente: Header',
              duration: '06:33',
            },
            {
              id: 'W_ATsETujaY',
              title: 'Componente: Sidebar',
              duration: '09:12',
            },
            { id: 'Pj8dPeameYo', title: 'CSS Global', duration: '03:23' },
            {
              id: '8KBq2vhwbac',
              title: 'Form de comentários',
              duration: '11:34',
            },
          ],
        },
        {
          id: '2',
          title: 'Estrutura da aplicação',
          lessons: [
            {
              id: 'gE48FQXRZ_o',
              title: 'Componente: Comment',
              duration: '13:45',
            },
            { id: 'Ng_Vk4tBl0g', title: 'Responsividade', duration: '10:05' },
            {
              id: 'h5JA3wfuW1k',
              title: 'Interações no JSX',
              duration: '06:33',
            },
            {
              id: '1G0vSTqWELg',
              title: 'Utilizando estado',
              duration: '09:12',
            },
          ],
        },
      ],
    },
    currentModuleIndex: 0,
    currentLessonIndex: 0,
  },
  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0]
      state.currentLessonIndex = action.payload[1]
    },
    next: (state) => {
      const lessonIndex = ++state.currentLessonIndex
      const lessonLength =
        state.courses.modules[state.currentModuleIndex].lessons.length

      // se a quantidade de aulas na lista for igual ao index da aula atual
      if (lessonIndex === lessonLength) {
        const nextModuleIndex = ++state.currentModuleIndex
        const nextModule = state.courses.modules[nextModuleIndex]
        // Se existir um próximo módulo
        if (nextModule) {
          state.currentModuleIndex = nextModuleIndex
          state.currentLessonIndex = 0
        }
      } else {
        state.currentLessonIndex = lessonIndex
      }
    },
  },
})
export const player = playerSlice.reducer
export const { play, next } = playerSlice.actions

export const useCurrentLesson = () => {
  return useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player
    const currentModule = state.player.courses.modules[currentModuleIndex]
    const currentLesson =
      state.player.courses.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ]
    return { currentLesson, currentModule }
  })
}
