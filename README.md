# Brain Battle - 3-Minute Quiz

## Overview

Brain Battle is an engaging, timed quiz application designed to test users' knowledge across various categories in just 3 minutes. Built with pure HTML, CSS, and JavaScript, this lightweight web app offers an interactive quiz experience with instant feedback and performance analysis.

## Features

### Quiz Functionality
- ⏱️ **3-minute timed challenge** with 15 questions
- 🧠 **Four quiz categories**: IQ Test, General Knowledge, Science, History
- 📊 **Three difficulty levels**: Easy, Medium, Hard
- ✅ **Instant feedback** on correct/incorrect answers
- 📈 **Progress tracking** with visual indicators

### User Experience
- 🎨 **Modern UI** with responsive design
- 🚀 **Smooth transitions** between screens
- 🏆 **Performance feedback** with badges and scores
- 🔄 **Retake option** to improve your score

### Technical Features
- 💾 **LocalStorage integration** for saving results
- ⚡ **Optimized performance** with vanilla JavaScript
- 📱 **Mobile-friendly** responsive layout
- 🎭 **Interactive elements** with hover and click effects

You can simply open the `01-home.html` file directly in your browser.

## Usage

1. **Home Screen**:
   - Select one of four quiz categories
   - Choose your preferred difficulty level (Easy, Medium, Hard)

2. **Quiz Screen**:
   - Answer 15 questions within 3 minutes
   - Watch the timer and progress bar
   - Click options to select your answer
   - Click "Next" or wait for automatic progression

3. **Results Screen**:
   - View your score out of 15
   - See your accuracy percentage
   - Get personalized feedback based on performance
   - Choose to retake the quiz or try another category

## Project Structure


brain-battle-quiz/
├── 01-home.html            # Home page with category selection
├── 02-quiz.html            # Quiz page with questions and timer
├── 03-results.html         # Results display page
├── quiz-script.js          # Quiz logic and question management
├── results-script.js       # Results calculation and display
├── styles.css              # All application styling
├── images/                 # Background images (optional)
│   ├── home.jpg
│   ├── IQ.jpg
│   └── result.jpg
└── README.md               # This documentation file

## Technical Details

### Core Technologies
- **HTML5**: Semantic structure of the application
- **CSS3**: Styling with modern features like flexbox and CSS variables
- **JavaScript**: Quiz logic, timer, and state management

### Key Implementation Details
- **State Management**: Uses LocalStorage to persist quiz results between pages
- **Timer System**: Countdown timer with visual warnings when time is running low
- **Question Bank**: Over 300 questions organized by category and difficulty
- **Responsive Design**: Media queries ensure proper display on all devices

### Performance Considerations
- Lightweight (no frameworks or libraries)
- Optimized DOM manipulation
- Efficient event handling

## Customization

### Adding New Questions
To add more questions, edit the `quizData` object in `quiz-script.js`. Follow this structure:
```javascript
{
  category: {
    difficulty: [
      {
        question: "Your question here",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0 // Index of correct answer
      }
    ]
  }
}
```

### Modifying Styles
Edit `styles.css` to change the appearance. Key sections to modify:
- Color scheme in `:root` variables
- Quiz card styling in `.category-card`
- Timer appearance in `.timer-container`
- Button styles in `.btn`

### Changing Feedback Messages
Update the `resultMapping` object in `results-script.js` to modify the feedback messages based on scores.

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

### Areas for Contribution
- Adding more quiz questions
- Improving accessibility
- Enhancing mobile experience
- Adding new quiz categories
- Implementing user accounts/leaderboards

