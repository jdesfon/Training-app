export default {
    createExercise: '/exercises',
    getExercise: id => `/exercises/${id}`,
    listExercises: '/exercises',
    createSet: '/sets',
    lastSet: exerciseId => `/sets/last/exercise/${exerciseId}`,
    listSets: exerciseId => `/sets/exercise/${exerciseId}`,
    updateSet: id => `/sets/${id}`,
    deleteSet: id => `/sets/${id}`,
}
