// Quiz Data with Difficulty Levels
const quizData = {
    iq: {
        name: "IQ Test",
        icon: "🧠",
        easy: [
            {
                question: "Complete the sequence: 2, 4, 6, 8, __",
                options: ["10", "12", "14", "16"],
                correct: 0
            },
            {
                question: "Which shape has 3 sides?",
                options: ["Square", "Triangle", "Circle", "Rectangle"],
                correct: 1
            },
            {
                question: "What comes next: A, B, C, D, __",
                options: ["E", "F", "G", "H"],
                correct: 0
            },
            {
                question: "If 2 + 2 = 4, what is 4 + 4?",
                options: ["6", "8", "10", "12"],
                correct: 1
            },
            {
                question: "Which number is missing: 1, 2, 3, __, 5",
                options: ["3", "4", "5", "6"],
                correct: 1
            },
            {
                question: "What is the opposite of 'hot'?",
                options: ["Warm", "Cold", "Cool", "Freezing"],
                correct: 1
            },
            {
                question: "Which animal is the largest?",
                options: ["Cat", "Dog", "Elephant", "Mouse"],
                correct: 2
            },
            {
                question: "What color is the sky on a clear day?",
                options: ["Red", "Green", "Blue", "Yellow"],
                correct: 2
            },
            {
                question: "How many days are in a week?",
                options: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "What is 5 x 5?",
                options: ["20", "25", "30", "35"],
                correct: 1
            },
            {
                question: "Which season comes after summer?",
                options: ["Spring", "Fall", "Winter", "Summer"],
                correct: 1
            },
            {
                question: "What is the capital of the United States?",
                options: ["New York", "Los Angeles", "Washington D.C.", "Chicago"],
                correct: 2
            },
            {
                question: "Which planet is closest to the sun?",
                options: ["Earth", "Mars", "Mercury", "Venus"],
                correct: 2
            },
            {
                question: "What is the largest ocean?",
                options: ["Atlantic", "Indian", "Pacific", "Arctic"],
                correct: 2
            },
            {
                question: "How many continents are there?",
                options: ["5", "6", "7", "8"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "Complete the sequence: 2, 4, 8, 16, __",
                options: ["24", "32", "30", "28"],
                correct: 1
            },
            {
                question: "If all Bloops are Razzles and all Razzles are Lazzles, then all Bloops are definitely Lazzles.",
                options: ["True", "False", "Cannot be determined", "Depends on the context"],
                correct: 0
            },
            {
                question: "Which number comes next: 1, 3, 6, 10, 15, __",
                options: ["20", "21", "22", "23"],
                correct: 1
            },
            {
                question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
                options: ["7.5°", "15°", "22.5°", "30°"],
                correct: 0
            },
            {
                question: "If RED = 27 and BLUE = 32, what does GREEN equal?",
                options: ["55", "59", "60", "65"],
                correct: 1
            },
            {
                question: "Which shape comes next: Circle, Square, Triangle, Circle, Square, __",
                options: ["Triangle", "Circle", "Square", "Rectangle"],
                correct: 0
            },
            {
                question: "If 5 workers can build a house in 20 days, how many days will it take 10 workers?",
                options: ["5 days", "10 days", "15 days", "20 days"],
                correct: 1
            },
            {
                question: "What is the missing number: 8, 16, 24, 32, __, 48",
                options: ["36", "38", "40", "42"],
                correct: 2
            },
            {
                question: "If A=1, B=2, C=3, what is the sum of the letters in 'CAT'?",
                options: ["6", "24", "18", "12"],
                correct: 0
            },
            {
                question: "Which pattern is different: 2,4,6,8,10 or 1,3,5,7,9?",
                options: ["First pattern", "Second pattern", "Both are the same", "Neither"],
                correct: 1
            },
            {
                question: "If today is Monday, what day will it be in 100 days?",
                options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                correct: 2
            },
            {
                question: "Complete: If all X are Y, and some Y are Z, then some X are Z.",
                options: ["Always true", "Sometimes true", "Never true", "Cannot be determined"],
                correct: 1
            },
            {
                question: "What is the next letter: A, C, F, J, __",
                options: ["M", "N", "O", "P"],
                correct: 2
            },
            {
                question: "If 3 cats catch 3 mice in 3 minutes, how many cats catch 100 mice in 100 minutes?",
                options: ["3 cats", "100 cats", "1 cat", "Cannot be determined"],
                correct: 0
            },
            {
                question: "Which number is missing: 1, 4, 9, 16, 25, __",
                options: ["30", "36", "40", "49"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "In a group of 100 people, 60 speak English, 40 speak French, and 20 speak both. How many speak neither?",
                options: ["10", "20", "30", "40"],
                correct: 1
            },
            {
                question: "A train leaves station A at 2 PM traveling at 60 mph. Another train leaves station B at 3 PM traveling at 80 mph toward station A. If the stations are 300 miles apart, when do they meet?",
                options: ["4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM"],
                correct: 1
            },
            {
                question: "If x² + y² = 25 and x + y = 7, what is xy?",
                options: ["12", "24", "36", "48"],
                correct: 0
            },
            {
                question: "A cube has a volume of 64 cubic units. What is the length of its diagonal?",
                options: ["4√3", "8", "8√3", "12"],
                correct: 0
            },
            {
                question: "In how many ways can 5 people be seated around a circular table?",
                options: ["24", "120", "720", "5040"],
                correct: 0
            },
            {
                question: "If log₂(x) = 3 and log₂(y) = 4, what is log₂(xy)?",
                options: ["7", "12", "24", "64"],
                correct: 0
            },
            {
                question: "A sequence is defined by a₁ = 1, a₂ = 2, and aₙ = aₙ₋₁ + aₙ₋₂ for n > 2. What is a₈?",
                options: ["21", "34", "55", "89"],
                correct: 1
            },
            {
                question: "If a triangle has angles measuring 30°, 60°, and 90°, and the shortest side is 5 units, what is the longest side?",
                options: ["5√3", "10", "10√3", "15"],
                correct: 1
            },
            {
                question: "What is the probability of getting exactly 3 heads when flipping a fair coin 5 times?",
                options: ["5/32", "10/32", "15/32", "20/32"],
                correct: 1
            },
            {
                question: "If f(x) = 2x + 3 and g(x) = x² - 1, what is f(g(2))?",
                options: ["7", "9", "11", "13"],
                correct: 1
            },
            {
                question: "A rectangle has perimeter 20 and area 24. What are its dimensions?",
                options: ["4×6", "3×8", "2×12", "1×24"],
                correct: 0
            },
            {
                question: "If sin(θ) = 0.6 and cos(θ) = 0.8, what is tan(θ)?",
                options: ["0.75", "0.8", "1.2", "1.33"],
                correct: 0
            },
            {
                question: "What is the sum of the infinite series 1 + 1/2 + 1/4 + 1/8 + ...?",
                options: ["1", "2", "3", "∞"],
                correct: 1
            },
            {
                question: "If a circle has radius 5, what is the area of a sector with central angle 60°?",
                options: ["25π/6", "25π/3", "50π/3", "100π/3"],
                correct: 0
            },
            {
                question: "What is the derivative of x³eˣ?",
                options: ["3x²eˣ", "x³eˣ", "3x²eˣ + x³eˣ", "3x²eˣ - x³eˣ"],
                correct: 2
            }
        ]
    },
    general: {
        name: "General Knowledge",
        icon: "🌍",
        easy: [
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                correct: 2
            },
            {
                question: "Which animal is known as the 'King of the Jungle'?",
                options: ["Tiger", "Lion", "Elephant", "Gorilla"],
                correct: 1
            },
            {
                question: "What color are bananas when they're ripe?",
                options: ["Green", "Yellow", "Red", "Blue"],
                correct: 1
            },
            {
                question: "How many sides does a triangle have?",
                options: ["2", "3", "4", "5"],
                correct: 1
            },
            {
                question: "What is the largest planet in our solar system?",
                options: ["Earth", "Mars", "Jupiter", "Saturn"],
                correct: 2
            },
            {
                question: "What is the main ingredient in bread?",
                options: ["Rice", "Wheat", "Corn", "Potato"],
                correct: 1
            },
            {
                question: "Which season comes after winter?",
                options: ["Spring", "Summer", "Fall", "Winter"],
                correct: 0
            },
            {
                question: "What is the opposite of 'big'?",
                options: ["Large", "Huge", "Small", "Giant"],
                correct: 2
            },
            {
                question: "How many hours are in a day?",
                options: ["12", "24", "36", "48"],
                correct: 1
            },
            {
                question: "What is the capital of Japan?",
                options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
                correct: 2
            },
            {
                question: "Which fruit is red and grows on trees?",
                options: ["Banana", "Apple", "Orange", "Grape"],
                correct: 1
            },
            {
                question: "What is the largest mammal on land?",
                options: ["Giraffe", "Elephant", "Hippo", "Rhino"],
                correct: 1
            },
            {
                question: "How many continents are there?",
                options: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "What is the main color of grass?",
                options: ["Blue", "Green", "Yellow", "Brown"],
                correct: 1
            },
            {
                question: "Which planet is closest to Earth?",
                options: ["Mars", "Venus", "Mercury", "Jupiter"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "What is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                correct: 2
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: 1
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
                correct: 1
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correct: 3
            },
            {
                question: "Which year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correct: 2
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Ag", "Au", "Fe", "Cu"],
                correct: 1
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                correct: 1
            },
            {
                question: "What is the smallest country in the world?",
                options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                correct: 2
            },
            {
                question: "Which animal is the fastest land mammal?",
                options: ["Lion", "Cheetah", "Leopard", "Gazelle"],
                correct: 1
            },
            {
                question: "What is the main component of the sun?",
                options: ["Liquid lava", "Molten iron", "Hydrogen gas", "Solid rock"],
                correct: 2
            },
            {
                question: "Who discovered gravity?",
                options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
                correct: 1
            },
            {
                question: "What is the largest mammal in the world?",
                options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
                correct: 1
            },
            {
                question: "Which country is home to the kangaroo?",
                options: ["New Zealand", "South Africa", "Australia", "India"],
                correct: 2
            },
            {
                question: "What is the currency of Japan?",
                options: ["Yuan", "Won", "Yen", "Ringgit"],
                correct: 2
            },
            {
                question: "Who was the first person to walk on the moon?",
                options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Alan Shepard"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "What is the capital of Bhutan?",
                options: ["Kathmandu", "Thimphu", "Dhaka", "Vientiane"],
                correct: 1
            },
            {
                question: "Which country has the most time zones?",
                options: ["Russia", "United States", "France", "Australia"],
                correct: 2
            },
            {
                question: "What is the largest desert in the world?",
                options: ["Sahara", "Antarctic", "Arabian", "Gobi"],
                correct: 1
            },
            {
                question: "Which language has the most native speakers?",
                options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
                correct: 2
            },
            {
                question: "What is the deepest point in the ocean?",
                options: ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "Philippine Trench"],
                correct: 0
            },
            {
                question: "Which country produces the most coffee?",
                options: ["Colombia", "Brazil", "Vietnam", "Ethiopia"],
                correct: 1
            },
            {
                question: "What is the largest island in the world?",
                options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
                correct: 0
            },
            {
                question: "Which city has the largest population?",
                options: ["New York", "Tokyo", "Shanghai", "Delhi"],
                correct: 1
            },
            {
                question: "What is the national flower of Japan?",
                options: ["Cherry Blossom", "Rose", "Lotus", "Chrysanthemum"],
                correct: 0
            },
            {
                question: "Which country has the most UNESCO World Heritage Sites?",
                options: ["Italy", "China", "Spain", "France"],
                correct: 0
            },
            {
                question: "What is the longest river in the world?",
                options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
                correct: 0
            },
            {
                question: "Which country has the most official languages?",
                options: ["India", "South Africa", "Switzerland", "Belgium"],
                correct: 0
            },
            {
                question: "What is the largest lake by surface area?",
                options: ["Caspian Sea", "Superior", "Victoria", "Huron"],
                correct: 0
            },
            {
                question: "Which country has the most islands?",
                options: ["Indonesia", "Sweden", "Norway", "Finland"],
                correct: 1
            },
            {
                question: "What is the highest waterfall in the world?",
                options: ["Angel Falls", "Niagara Falls", "Victoria Falls", "Iguazu Falls"],
                correct: 0
            }
        ]
    },
    science: {
        name: "Science",
        icon: "🔬",
        easy: [
            {
                question: "What is the hardest natural substance on Earth?",
                options: ["Steel", "Diamond", "Granite", "Iron"],
                correct: 1
            },
            {
                question: "What is the chemical formula for water?",
                options: ["H2O", "CO2", "O2", "N2"],
                correct: 0
            },
            {
                question: "Which gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
                correct: 1
            },
            {
                question: "What is the largest organ in the human body?",
                options: ["Heart", "Brain", "Liver", "Skin"],
                correct: 3
            },
            {
                question: "What is the speed of light?",
                options: ["299,792 km/s", "199,792 km/s", "399,792 km/s", "499,792 km/s"],
                correct: 0
            },
            {
                question: "Which element has the chemical symbol 'O'?",
                options: ["Osmium", "Oxygen", "Oganesson", "Osmium"],
                correct: 1
            },
            {
                question: "What is the study of fossils called?",
                options: ["Archaeology", "Paleontology", "Geology", "Biology"],
                correct: 1
            },
            {
                question: "What is the atomic number of carbon?",
                options: ["4", "6", "8", "12"],
                correct: 1
            },
            {
                question: "Which planet has the most moons?",
                options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                correct: 1
            },
            {
                question: "What is the process by which plants make their own food?",
                options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
                correct: 1
            },
            {
                question: "What is the smallest unit of life?",
                options: ["Atom", "Cell", "Molecule", "Tissue"],
                correct: 1
            },
            {
                question: "What is the force that pulls objects toward Earth?",
                options: ["Magnetism", "Gravity", "Friction", "Inertia"],
                correct: 1
            },
            {
                question: "What is the main gas in Earth's atmosphere?",
                options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
                correct: 2
            },
            {
                question: "What is the study of weather called?",
                options: ["Meteorology", "Climatology", "Atmospheric science", "Weatherology"],
                correct: 0
            },
            {
                question: "What is the energy currency of cells?",
                options: ["Glucose", "ATP", "DNA", "Protein"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "What is the atomic number of hydrogen?",
                options: ["0", "1", "2", "3"],
                correct: 1
            },
            {
                question: "Which gas is responsible for the greenhouse effect?",
                options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
                correct: 1
            },
            {
                question: "What is the largest bone in the human body?",
                options: ["Skull", "Femur", "Humerus", "Tibia"],
                correct: 1
            },
            {
                question: "Which planet is known as the 'Morning Star'?",
                options: ["Mars", "Venus", "Mercury", "Jupiter"],
                correct: 1
            },
            {
                question: "What is the chemical symbol for iron?",
                options: ["Ir", "Fe", "In", "Fr"],
                correct: 1
            },
            {
                question: "What is the study of earthquakes called?",
                options: ["Seismology", "Volcanology", "Meteorology", "Geology"],
                correct: 0
            },
            {
                question: "Which blood type is the universal donor?",
                options: ["A", "B", "AB", "O"],
                correct: 3
            },
            {
                question: "What is the largest organ in the human body?",
                options: ["Heart", "Brain", "Liver", "Skin"],
                correct: 3
            },
            {
                question: "Which element is most abundant in the universe?",
                options: ["Helium", "Hydrogen", "Carbon", "Oxygen"],
                correct: 1
            },
            {
                question: "What is the study of insects called?",
                options: ["Ornithology", "Entomology", "Herpetology", "Ichthyology"],
                correct: 1
            },
            {
                question: "Which planet has the Great Red Spot?",
                options: ["Mars", "Jupiter", "Saturn", "Neptune"],
                correct: 1
            },
            {
                question: "What is the chemical formula for table salt?",
                options: ["NaCl", "H2O", "CO2", "CaCO3"],
                correct: 0
            },
            {
                question: "What is the study of fossils called?",
                options: ["Archaeology", "Paleontology", "Geology", "Biology"],
                correct: 1
            },
            {
                question: "Which gas do humans exhale?",
                options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
                correct: 1
            },
            {
                question: "What is the largest organ in the human body?",
                options: ["Heart", "Brain", "Liver", "Skin"],
                correct: 3
            }
        ],
        hard: [
            {
                question: "What is the Heisenberg Uncertainty Principle?",
                options: ["You cannot know both position and momentum of a particle", "Energy cannot be created or destroyed", "Light travels in straight lines", "Matter is made of atoms"],
                correct: 0
            },
            {
                question: "What is the chemical formula for glucose?",
                options: ["C6H12O6", "C12H22O11", "CH3COOH", "NaHCO3"],
                correct: 0
            },
            {
                question: "Which subatomic particle has a positive charge?",
                options: ["Electron", "Neutron", "Proton", "Photon"],
                correct: 2
            },
            {
                question: "What is the study of the nervous system called?",
                options: ["Cardiology", "Neurology", "Oncology", "Dermatology"],
                correct: 1
            },
            {
                question: "What is the speed of sound in air at room temperature?",
                options: ["343 m/s", "299,792 km/s", "1500 m/s", "500 m/s"],
                correct: 0
            },
            {
                question: "Which enzyme breaks down starch?",
                options: ["Pepsin", "Amylase", "Lipase", "Protease"],
                correct: 1
            },
            {
                question: "What is the atomic number of uranium?",
                options: ["92", "238", "235", "90"],
                correct: 0
            },
            {
                question: "What is the study of the origin of the universe called?",
                options: ["Astronomy", "Cosmology", "Astrophysics", "Meteorology"],
                correct: 1
            },
            {
                question: "Which blood type is the universal recipient?",
                options: ["A", "B", "AB", "O"],
                correct: 2
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Ag", "Au", "Fe", "Cu"],
                correct: 1
            },
            {
                question: "What is the study of the immune system called?",
                options: ["Immunology", "Endocrinology", "Hematology", "Oncology"],
                correct: 0
            },
            {
                question: "Which planet has the most complex ring system?",
                options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                correct: 1
            },
            {
                question: "What is the molecular formula for methane?",
                options: ["CH4", "C2H6", "C3H8", "CO2"],
                correct: 0
            },
            {
                question: "What is the study of the heart called?",
                options: ["Cardiology", "Neurology", "Oncology", "Dermatology"],
                correct: 0
            },
            {
                question: "Which element is a noble gas?",
                options: ["Helium", "Hydrogen", "Carbon", "Oxygen"],
                correct: 0
            }
        ]
    },
    history: {
        name: "History",
        icon: "📚",
        easy: [
            {
                question: "Who was the first President of the United States?",
                options: ["John Adams", "Thomas Jefferson", "George Washington", "Benjamin Franklin"],
                correct: 2
            },
            {
                question: "In which year did Columbus discover America?",
                options: ["1492", "1498", "1500", "1502"],
                correct: 0
            },
            {
                question: "Which war ended in 1945?",
                options: ["World War I", "World War II", "Korean War", "Vietnam War"],
                correct: 1
            },
            {
                question: "Who was the first Emperor of Rome?",
                options: ["Julius Caesar", "Augustus", "Nero", "Constantine"],
                correct: 1
            },
            {
                question: "In which year did the Titanic sink?",
                options: ["1910", "1912", "1914", "1916"],
                correct: 1
            },
            {
                question: "Who was the first woman to win a Nobel Prize?",
                options: ["Marie Curie", "Mother Teresa", "Jane Addams", "Pearl Buck"],
                correct: 0
            },
            {
                question: "Which ancient wonder was located in Alexandria?",
                options: ["Colossus of Rhodes", "Lighthouse", "Hanging Gardens", "Temple of Artemis"],
                correct: 1
            },
            {
                question: "Who was the first Emperor of China?",
                options: ["Confucius", "Qin Shi Huang", "Han Wudi", "Tang Taizong"],
                correct: 1
            },
            {
                question: "In which year did the French Revolution begin?",
                options: ["1776", "1789", "1799", "1804"],
                correct: 1
            },
            {
                question: "Who was the first person to reach the South Pole?",
                options: ["Robert Scott", "Roald Amundsen", "Ernest Shackleton", "Richard Byrd"],
                correct: 1
            },
            {
                question: "Which empire was ruled by the Aztecs?",
                options: ["Mexican Empire", "Incan Empire", "Mayan Empire", "Aztec Empire"],
                correct: 3
            },
            {
                question: "Who was the first female Prime Minister of the UK?",
                options: ["Margaret Thatcher", "Theresa May", "Indira Gandhi", "Golda Meir"],
                correct: 0
            },
            {
                question: "In which year did the Berlin Wall fall?",
                options: ["1987", "1989", "1991", "1993"],
                correct: 1
            },
            {
                question: "Who was the first person to fly solo across the Atlantic?",
                options: ["Charles Lindbergh", "Amelia Earhart", "Wright Brothers", "Howard Hughes"],
                correct: 0
            },
            {
                question: "Which ancient civilization built the pyramids?",
                options: ["Greeks", "Romans", "Egyptians", "Babylonians"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "What was the name of the ship that brought the Pilgrims to America?",
                options: ["Mayflower", "Santa Maria", "Nina", "Pinta"],
                correct: 0
            },
            {
                question: "Who was the first Emperor of Japan?",
                options: ["Emperor Jimmu", "Emperor Meiji", "Emperor Hirohito", "Emperor Akihito"],
                correct: 0
            },
            {
                question: "In which year did the American Civil War end?",
                options: ["1863", "1864", "1865", "1866"],
                correct: 2
            },
            {
                question: "Who was the first female astronaut?",
                options: ["Sally Ride", "Valentina Tereshkova", "Mae Jemison", "Eileen Collins"],
                correct: 1
            },
            {
                question: "Which country was ruled by the Incas?",
                options: ["Mexico", "Peru", "Brazil", "Argentina"],
                correct: 1
            },
            {
                question: "Who was the first African American President of the United States?",
                options: ["Barack Obama", "Jesse Jackson", "Colin Powell", "Condoleezza Rice"],
                correct: 0
            },
            {
                question: "In which year did the Russian Revolution occur?",
                options: ["1915", "1917", "1919", "1921"],
                correct: 1
            },
            {
                question: "Who was the first woman to win the Nobel Prize in Physics?",
                options: ["Marie Curie", "Maria Goeppert-Mayer", "Donna Strickland", "Andrea Ghez"],
                correct: 0
            },
            {
                question: "Which ancient wonder was located in Babylon?",
                options: ["Hanging Gardens", "Colossus of Rhodes", "Lighthouse", "Temple of Artemis"],
                correct: 0
            },
            {
                question: "Who was the first Emperor of the Holy Roman Empire?",
                options: ["Charlemagne", "Otto I", "Frederick I", "Charles V"],
                correct: 0
            },
            {
                question: "In which year did the Industrial Revolution begin?",
                options: ["1760", "1780", "1800", "1820"],
                correct: 0
            },
            {
                question: "Who was the first person to reach the North Pole?",
                options: ["Robert Peary", "Roald Amundsen", "Ernest Shackleton", "Richard Byrd"],
                correct: 0
            },
            {
                question: "Which empire was ruled by the Ottomans?",
                options: ["Turkish Empire", "Persian Empire", "Mongol Empire", "Byzantine Empire"],
                correct: 0
            },
            {
                question: "Who was the first female Supreme Court Justice?",
                options: ["Sandra Day O'Connor", "Ruth Bader Ginsburg", "Sonia Sotomayor", "Elena Kagan"],
                correct: 0
            },
            {
                question: "In which year did the Cold War end?",
                options: ["1987", "1989", "1991", "1993"],
                correct: 2
            }
        ],
        hard: [
            {
                question: "Who was the first Emperor of the Byzantine Empire?",
                options: ["Constantine I", "Justinian I", "Theodosius I", "Heraclius"],
                correct: 0
            },
            {
                question: "In which year did the Black Death reach Europe?",
                options: ["1347", "1350", "1360", "1370"],
                correct: 0
            },
            {
                question: "Who was the first female Prime Minister of India?",
                options: ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil", "Meira Kumar"],
                correct: 0
            },
            {
                question: "Which ancient wonder was located in Halicarnassus?",
                options: ["Mausoleum", "Colossus of Rhodes", "Lighthouse", "Temple of Artemis"],
                correct: 0
            },
            {
                question: "Who was the first Emperor of the Mughal Empire?",
                options: ["Babur", "Akbar", "Jahangir", "Shah Jahan"],
                correct: 0
            },
            {
                question: "In which year did the Spanish Armada sail against England?",
                options: ["1585", "1588", "1591", "1595"],
                correct: 1
            },
            {
                question: "Who was the first female Nobel Prize winner in Literature?",
                options: ["Selma Lagerlöf", "Grazia Deledda", "Sigrid Undset", "Pearl Buck"],
                correct: 0
            },
            {
                question: "Which empire was ruled by the Safavids?",
                options: ["Persian Empire", "Ottoman Empire", "Mongol Empire", "Mughal Empire"],
                correct: 0
            },
            {
                question: "Who was the first Emperor of the Austro-Hungarian Empire?",
                options: ["Franz Joseph I", "Franz Ferdinand", "Karl I", "Otto von Habsburg"],
                correct: 0
            },
            {
                question: "In which year did the Hundred Years' War begin?",
                options: ["1337", "1340", "1345", "1350"],
                correct: 0
            },
            {
                question: "Who was the first female Prime Minister of Israel?",
                options: ["Golda Meir", "Tzipi Livni", "Dalia Itzik", "Limor Livnat"],
                correct: 0
            },
            {
                question: "Which ancient wonder was located in Ephesus?",
                options: ["Temple of Artemis", "Colossus of Rhodes", "Lighthouse", "Mausoleum"],
                correct: 0
            },
            {
                question: "Who was the first Emperor of the Song Dynasty?",
                options: ["Emperor Taizu", "Emperor Taizong", "Emperor Zhenzong", "Emperor Renzong"],
                correct: 0
            },
            {
                question: "In which year did the Thirty Years' War begin?",
                options: ["1618", "1620", "1625", "1630"],
                correct: 0
            },
            {
                question: "Who was the first female Prime Minister of Pakistan?",
                options: ["Benazir Bhutto", "Fatima Jinnah", "Hina Rabbani Khar", "Sherry Rehman"],
                correct: 0
            }
        ]
    }
};


const timerElement = document.getElementById('timer');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const nextBtn = document.getElementById('nextBtn');
const doneBtn = document.getElementById('doneBtn');
const currentQuestionElement = document.getElementById('currentQuestion');
const progressFill = document.getElementById('progressFill');
const difficultyBadge = document.getElementById('difficultyBadge');

// Quiz State
let currentCategory = '';
let currentDifficulty = '';
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let timer = null;
let timeLeft = 180; 
let answers = [];


document.addEventListener('DOMContentLoaded', () => {
    
    currentCategory = localStorage.getItem('selectedCategory');
    currentDifficulty = localStorage.getItem('selectedDifficulty');
    
    if (!currentCategory || !currentDifficulty || !quizData[currentCategory] || !quizData[currentCategory][currentDifficulty]) {
       
        window.location.href = '01-home.html';
        return;
    }
    
    
    startQuiz();
    

    nextBtn.addEventListener('click', nextQuestion);
    doneBtn.addEventListener('click', endQuiz);
});

function startQuiz() {
    
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    timeLeft = 180;
    answers = [];
    
   
    const difficultyNames = {
        easy: "Easy",
        medium: "Medium",
        hard: "Hard"
    };
    difficultyBadge.textContent = difficultyNames[currentDifficulty];
    
   
    startTimer();
    
    
    loadQuestion();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Change color when time is running low
    if (timeLeft <= 60) {
        timerElement.style.color = '#ff6b6b';
    }
}

function loadQuestion() {
    const question = quizData[currentCategory][currentDifficulty][currentQuestionIndex];
    
    // Update question text
    questionText.textContent = question.question;
    
    // Update progress
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    progressFill.style.width = `${((currentQuestionIndex + 1) / 15) * 100}%`;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create option elements
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        
        optionElement.addEventListener('click', () => selectOption(index));
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Update button visibility
    if (currentQuestionIndex === 14) { 
        nextBtn.style.display = 'none';
        doneBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        doneBtn.style.display = 'none';
    }
    
    // Disable buttons until an option is selected
    nextBtn.disabled = true;
    doneBtn.disabled = true;
    selectedAnswer = null;
}

function selectOption(index) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Select new option
    const selectedOption = document.querySelector(`[data-index="${index}"]`);
    selectedOption.classList.add('selected');
    
    selectedAnswer = index;
    nextBtn.disabled = false;
    doneBtn.disabled = false;
}

function nextQuestion() {
    if (selectedAnswer === null) return;
    
    // Store answer
    answers.push(selectedAnswer);
    
    // Check if answer is correct
    const question = quizData[currentCategory][currentDifficulty][currentQuestionIndex];
    if (selectedAnswer === question.correct) {
        score++;
    }
    
    // Show correct/incorrect feedback briefly
    showAnswerFeedback(selectedAnswer === question.correct);
    
    // Move to next question
    currentQuestionIndex++;
    
    setTimeout(() => {
        if (currentQuestionIndex < 15) {
            loadQuestion();
        }
    }, 1000);
}

function showAnswerFeedback(isCorrect) {
    const options = document.querySelectorAll('.option');
    const correctAnswer = quizData[currentCategory][currentDifficulty][currentQuestionIndex].correct;
    
    options.forEach((option, index) => {
        if (index === correctAnswer) {
            option.classList.add('correct');
        } else if (index === selectedAnswer && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
}

function endQuiz() {
    // Store the last answer if on the last question
    if (currentQuestionIndex === 14 && selectedAnswer !== null) {
        answers.push(selectedAnswer);
        const question = quizData[currentCategory][currentDifficulty][currentQuestionIndex];
        if (selectedAnswer === question.correct) {
            score++;
        }
    }
    
    // Store results in localStorage
    localStorage.setItem('quizResults', JSON.stringify({
        category: currentCategory,
        difficulty: currentDifficulty,
        score: score,
        answers: answers,
        timeLeft: timeLeft
    }));
    
    // Navigate to results page
    window.location.href = '03-results.html';
}
