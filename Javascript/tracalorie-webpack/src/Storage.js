class Storage {
    static getCalorieLimit(defaultLimit = 2000) {
        let calorieLimit;
        if (localStorage.getItem('calorieLimit') === null) {
            calorieLimit = defaultLimit;
        } else {
            calorieLimit = parseInt(localStorage.getItem('calorieLimit'));
        }
        return calorieLimit;
    }

    static setCalorieLimit(calorieLimit) {
        localStorage.setItem('calorieLimit', calorieLimit);
    }

    static getTotalCalories(defaultCalories = 0) {
        let totalCalories;
        if (localStorage.getItem('totalCalories') === null) {
            totalCalories = defaultCalories;
        } else {
            totalCalories = parseInt(localStorage.getItem('totalCalories'));
        }
        return totalCalories;
    }

    static updateTotalCalories(calories) {
        localStorage.setItem('totalCalories', calories);
    }

    static getMeals() {
        let meals;
        if (localStorage.getItem('meals') === null) {
            meals = [];
        } else {
            meals = JSON.parse(localStorage.getItem('meals'));
        }
        return meals;
    }

    static saveMeal(meal) {
        const meals = Storage.getMeals();
        meals.push(meal);
        localStorage.setItem('meals', JSON.stringify(meals));
    }

    static removeMeal(id) {
        const meals = Storage.getMeals();
        const index = meals.findIndex((meal) => meal.id === id);
        console.log(index);
        if (index !== -1) {
            meals.splice(index, 1);
        }
        localStorage.setItem('meals', JSON.stringify(meals));
    }

    static getWorkouts() {
        let workouts;
        if (localStorage.getItem('workouts') === null) {
            workouts = [];
        } else {
            workouts = JSON.parse(localStorage.getItem('workouts'));
        }
        return workouts;
    }

    static saveWorkout(workout) {
        const workouts = Storage.getWorkouts();
        workouts.push(workout);
        localStorage.setItem('workouts', JSON.stringify(workouts));
    }

    static removeWorkout(id) {
        const workouts = Storage.getWorkouts();
        const index = workouts.findIndex((meal) => meal.id === id);
        console.log(index);
        if (index !== -1) {
            workouts.splice(index, 1);
        }
        localStorage.setItem('workouts', JSON.stringify(workouts));
    }

    static clearAll() {
        localStorage.removeItem('meals');
        localStorage.removeItem('workouts');
        localStorage.removeItem('totalCalories');
    }
}

export default Storage;