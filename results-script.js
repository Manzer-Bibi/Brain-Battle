// Result mapping for different categories
const resultMapping = {
    iq: {
        13: { icon: "🧠", title: "Genius Level", message: "Outstanding performance! Your logical thinking is exceptional." },
        10: { icon: "💡", title: "Above Average", message: "Great job! You have strong analytical skills." },
        7: { icon: "🙂", title: "Average Thinker", message: "Good work! Your reasoning skills are solid." },
        4: { icon: "🤔", title: "Needs Improvement", message: "Keep practicing! Logic skills can be developed." },
        0: { icon: "😅", title: "Keep Practicing", message: "Don't worry! Everyone starts somewhere. Keep learning!" }
    },
    general: {
        13: { icon: "🌍", title: "Knowledge Master", message: "Excellent! You have a vast general knowledge." },
        10: { icon: "📚", title: "Well Informed", message: "Great job! You're well-read and knowledgeable." },
        7: { icon: "📖", title: "Good Knowledge", message: "Nice work! You have a solid foundation." },
        4: { icon: "🔍", title: "Learning Journey", message: "Keep exploring! Knowledge comes with curiosity." },
        0: { icon: "📝", title: "Start Learning", message: "Every expert was once a beginner. Keep reading!" }
    },
    science: {
        13: { icon: "🔬", title: "Science Genius", message: "Brilliant! Your scientific knowledge is exceptional." },
        10: { icon: "⚗️", title: "Science Enthusiast", message: "Excellent! You have a strong scientific mind." },
        7: { icon: "🧪", title: "Science Learner", message: "Good work! Your scientific understanding is growing." },
        4: { icon: "🔬", title: "Science Explorer", message: "Keep experimenting! Science is all about discovery." },
        0: { icon: "🧬", title: "Science Beginner", message: "Welcome to the world of science! Keep exploring!" }
    },
    history: {
        13: { icon: "📚", title: "History Expert", message: "Outstanding! Your historical knowledge is remarkable." },
        10: { icon: "🏛️", title: "History Buff", message: "Great job! You have a deep appreciation for history." },
        7: { icon: "📜", title: "History Student", message: "Good work! Your historical knowledge is solid." },
        4: { icon: "🗿", title: "History Explorer", message: "Keep learning! History has many fascinating stories." },
        0: { icon: "📖", title: "History Beginner", message: "Welcome to the journey through time! Keep reading!" }
    }
};

// Category names mapping
const categoryNames = {
    iq: "IQ Test",
    general: "General Knowledge",
    science: "Science",
    history: "History"
};

// Difficulty names mapping
const difficultyNames = {
    easy: "Easy",
    medium: "Medium",
    hard: "Hard"
};

// DOM Elements
const finalScore = document.getElementById('finalScore');
const percentage = document.getElementById('percentage');
const categoryBadge = document.getElementById('categoryBadge');
const feedbackIcon = document.getElementById('feedbackIcon');
const feedbackTitle = document.getElementById('feedbackTitle');
const feedbackMessage = document.getElementById('feedbackMessage');

// Initialize results
document.addEventListener('DOMContentLoaded', () => {
    loadResults();
});

function loadResults() {
    // Get results from localStorage
    const results = JSON.parse(localStorage.getItem('quizResults'));
    
    if (!results) {
        // If no results, redirect to home
        window.location.href = '01-home.html';
        return;
    }
    
    const { category, difficulty, score } = results;
    
    // Calculate percentage
    const percentageScore = Math.round((score / 15) * 100);
    
    // Update results display
    finalScore.textContent = score;
    percentage.textContent = `${percentageScore}%`;
    categoryBadge.textContent = `${categoryNames[category]} - ${difficultyNames[difficulty]}`;
    
    // Get feedback based on score
    let feedback;
    if (score >= 13) feedback = resultMapping[category][13];
    else if (score >= 10) feedback = resultMapping[category][10];
    else if (score >= 7) feedback = resultMapping[category][7];
    else if (score >= 4) feedback = resultMapping[category][4];
    else feedback = resultMapping[category][0];
    
    feedbackIcon.textContent = feedback.icon;
    feedbackTitle.textContent = feedback.title;
    feedbackMessage.textContent = feedback.message;
}

function retakeQuiz() {
    // Navigate back to quiz page
    window.location.href = '02-quiz.html';
}

function goHome() {
    // Clear results and navigate to home
    localStorage.removeItem('quizResults');
    window.location.href = '01-home.html';
} 