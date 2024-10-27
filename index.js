const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');
    
    const duplicateCheckGoals = goalList.querySelectorAll('li'); 
    let duplicateConfirm = false;
    
    /*=========Logic Comes Here===========*/
    for (let i = 0; i < duplicateCheckGoals.length; i++) 
    {
        duplicateCheckGoals[i].style.border = '';
        if (duplicateCheckGoals[i].textContent === goalInput) {
            duplicateConfirm = true;
            duplicateCheckGoals[i].style.border = '2px solid yellow';
            break; 
        }
    }
    
    if(duplicateConfirm)
        {            
            alert("This goal already exists!");
            return;
        }
    
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    
    // Removing a goal item -> from lesson 3. DOMinate Your Fitness: Creating and Removing Elements (Scrimba)
    newGoal.addEventListener('click', () => 
    {
        goalList.removeChild(newGoal);
    });
    
    goalList.appendChild(newGoal);

    document.querySelector('#goalInput').value = '';
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
