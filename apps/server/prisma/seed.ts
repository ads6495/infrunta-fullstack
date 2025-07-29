/* eslint-disable @typescript-eslint/no-unused-vars */
import { ExerciseType, Level, PrismaClient } from 'prisma/generated/client';

const prisma = new PrismaClient();

async function createLanguages() {
    await prisma.language.createMany({
        data: [
            {
                code: 'ro',
                name: 'Romanian',
            },
            {
                code: 'it',
                name: 'italian',
            },
            {
                code: 'fr',
                name: 'French',
            },
            {
                code: 'es',
                name: 'Spanish',
            },
        ],
    });
}

async function createUnits() {
    const unitsData = [
        {
            orderNumber: 1,
            title: 'Introduction to Romanian',
            level: Level.A1,
            language: {
                connect: {
                    id: 1,
                },
            },
            objective: 'Learn basic greetings and introductions',
            lessons: {
                create: [
                    {
                        title: 'Basic Greetings',
                        content: 'Learn how to say hello and goodbye in Romanian',
                        orderNumber: 1,
                        premium: false,
                        exercises: {
                            create: [
                                {
                                    type: ExerciseType.AUDIO_IMAGE_MATCH,
                                    audioUrl: '/audio/hello.mp3',
                                    prompt: 'Match the audio to the correct greeting',
                                    correctAnswer: 'option1',
                                    englishTranslation: 'Hello',
                                    options: [
                                        {
                                            id: 'option1',
                                            text: 'Bună',
                                            imageUrl:
                                                'https://cdn.pixabay.com/photo/2021/11/19/18/28/ladies-6810005_1280.jpg?w=1920',
                                        },
                                        {
                                            id: 'option2',
                                            text: 'La revedere',
                                            imageUrl:
                                                'https://images.pexels.com/photos/8475151/pexels-photo-8475151.jpeg?auto=compress&cs=tinysrgb',
                                        },
                                        {
                                            id: 'option3',
                                            text: 'Mulțumesc',
                                            imageUrl:
                                                'https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                                        },
                                        {
                                            id: 'option4',
                                            text: 'Bună ziua',
                                            imageUrl:
                                                'https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                                        },
                                    ],
                                    orderNumber: 1,
                                },
                                {
                                    type: ExerciseType.AUDIO_IMAGE_MATCH,
                                    audioUrl: '/audio/goodmorning.mp3',
                                    prompt: 'Match the audio to the correct greeting',
                                    correctAnswer: 'option1',
                                    englishTranslation: 'Good morning',
                                    options: [
                                        {
                                            id: 'option1',
                                            text: 'Bună dimineața',
                                            imageUrl:
                                                'https://images.pexels.com/photos/4145032/pexels-photo-4145032.jpeg?auto=compress&cs=tinysrgb&w=1920',
                                        },
                                        {
                                            id: 'option2',
                                            text: 'La revedere',
                                            imageUrl:
                                                'https://images.pexels.com/photos/8475151/pexels-photo-8475151.jpeg?auto=compress&cs=tinysrgb',
                                        },
                                        {
                                            id: 'option3',
                                            text: 'Mulțumesc',
                                            imageUrl:
                                                'https://img.freepik.com/free-photo/portrait-young-beautiful-woman-gesticulating_273609-40419.jpg?t=st=1741737808~exp=1741741408~hmac=cba2092cc12e5d1ed1c1b2839c9f565fcc49481927e363e8bf54e104e1c66323',
                                        },
                                        {
                                            id: 'option4',
                                            text: 'Bună ziua',
                                            imageUrl:
                                                'https://images.pexels.com/photos/5064865/pexels-photo-5064865.jpeg?auto=compress&cs=tinysrgb',
                                        },
                                    ],
                                    orderNumber: 2,
                                },
                                {
                                    type: ExerciseType.AUDIO_IMAGE_MATCH,
                                    audioUrl: '/audio/goodafternoon.mp3',
                                    prompt: 'Match the audio to the correct greeting',
                                    correctAnswer: 'option4',
                                    englishTranslation: 'Good afternoon',
                                    options: [
                                        {
                                            id: 'option1',
                                            text: 'Bună ziua',
                                            imageUrl:
                                                'https://images.pexels.com/photos/4145032/pexels-photo-4145032.jpeg?auto=compress&cs=tinysrgb',
                                        },
                                        {
                                            id: 'option2',
                                            text: 'La revedere',
                                            imageUrl:
                                                'https://images.pexels.com/photos/8475151/pexels-photo-8475151.jpeg?auto=compress&cs=tinysrgb',
                                        },
                                        {
                                            id: 'option3',
                                            text: 'Mulțumesc',
                                            imageUrl:
                                                'https://img.freepik.com/free-photo/portrait-young-beautiful-woman-gesticulating_273609-40419.jpg?t=st=1741737808~exp=1741741408~hmac=cba2092cc12e5d1ed1c1b2839c9f565fcc49481927e363e8bf54e104e1c66323',
                                        },
                                        {
                                            id: 'option4',
                                            text: 'Bună seara',
                                            imageUrl:
                                                'https://images.pexels.com/photos/5064865/pexels-photo-5064865.jpeg?auto=compress&cs=tinysrgb',
                                        },
                                    ],
                                    orderNumber: 3,
                                },
                                {
                                    type: ExerciseType.AUDIO_IMAGE_MATCH,
                                    audioUrl: '/audio/goodbye.mp3',
                                    prompt: 'Match the audio to the correct greeting',
                                    correctAnswer: 'option1',
                                    englishTranslation: 'Salut',
                                    options: [
                                        {
                                            id: 'option1',
                                            text: 'Hi',
                                            imageUrl:
                                                'https://images.pexels.com/photos/4145032/pexels-photo-4145032.jpeg?auto=compress&cs=tinysrgb',
                                        },
                                        {
                                            id: 'option2',
                                            text: 'Thank you',
                                            imageUrl:
                                                'https://images.pexels.com/photos/8475151/pexels-photo-8475151.jpeg?auto=compress&cs=tinysrgb',
                                        },
                                        {
                                            id: 'option3',
                                            text: 'Morning',
                                            imageUrl:
                                                'https://img.freepik.com/free-photo/portrait-young-beautiful-woman-gesticulating_273609-40419.jpg?t=st=1741737808~exp=1741741408~hmac=cba2092cc12e5d1ed1c1b2839c9f565fcc49481927e363e8bf54e104e1c66323',
                                        },
                                        {
                                            id: 'option4',
                                            text: 'Goodbye',
                                            imageUrl:
                                                'https://images.pexels.com/photos/5064865/pexels-photo-5064865.jpeg?auto=compress&cs=tinysrgb',
                                        },
                                    ],
                                    orderNumber: 4,
                                },
                                {
                                    type: ExerciseType.AUDIO_FILL_BLANK,
                                    audioUrl: '/audio/goodmorning.mp3',
                                    prompt: 'Fill in the blank with the word you hear',
                                    correctAnswer: 'dimineața',
                                    englishTranslation: 'Good morning',
                                    options: { sentence: 'Bună ___ !' },
                                    orderNumber: 5,
                                },
                                {
                                    type: ExerciseType.AUDIO_FILL_BLANK,
                                    audioUrl: '/audio/goodafternoon.mp3',
                                    prompt: 'Fill in the blank with the word you hear',
                                    correctAnswer: 'ziua',
                                    englishTranslation: 'Good afternoon',
                                    options: { sentence: 'Bună ___ !' },
                                    orderNumber: 6,
                                },
                                {
                                    type: ExerciseType.AUDIO_FILL_BLANK,
                                    audioUrl: '/audio/goodbye.mp3',
                                    prompt: 'Fill in the blank with the word you hear',
                                    correctAnswer: 'revedere',
                                    englishTranslation: 'Goodbye',
                                    options: { sentence: 'La ___ !' },
                                    orderNumber: 7,
                                },
                                {
                                    type: ExerciseType.CONVERSATION_RESPONSE,
                                    prompt: 'Choose the most appropriate response',
                                    correctAnswer: 'option1',
                                    options: {
                                        conversation: [
                                            { speaker: 'Person A', text: '"Salut! Ce mai faci?"' },
                                            { speaker: 'Person B', text: '?' },
                                        ],
                                        options: [
                                            { id: 'option1', text: 'Bine, mulțumesc' },
                                            { id: 'option2', text: 'La revedere!' },
                                            { id: 'option3', text: 'Galben!' },
                                        ],
                                    },
                                    orderNumber: 8,
                                },
                                {
                                    type: ExerciseType.CONVERSATION_RESPONSE,
                                    prompt: 'Choose the most appropriate response',
                                    correctAnswer: 'option1',
                                    options: {
                                        conversation: [
                                            { speaker: 'Person A', text: '"Bună ziua" ' },
                                            { speaker: 'Person B', text: '?' },
                                        ],
                                        options: [
                                            { id: 'option1', text: 'Bună ziua' },
                                            { id: 'option2', text: 'Bună dimineața' },
                                            { id: 'option3', text: 'Mulțumesc' },
                                        ],
                                    },
                                    orderNumber: 9,
                                },
                                {
                                    type: ExerciseType.CONVERSATION_RESPONSE,
                                    prompt: 'Choose the most appropriate response',
                                    correctAnswer: 'option1',
                                    options: {
                                        conversation: [
                                            { speaker: 'Person A', text: '"Noapte bună" ' },
                                            { speaker: 'Person B', text: '?' },
                                        ],
                                        options: [
                                            { id: 'option1', text: 'Noapte bună' },
                                            { id: 'option2', text: 'Bună dimineața' },
                                            { id: 'option3', text: 'Mulțumesc' },
                                        ],
                                    },
                                    orderNumber: 10,
                                },
                                {
                                    type: ExerciseType.DRAG_MATCH,
                                    prompt: 'Match the greeting to the correct time of day',
                                    correctAnswer:
                                        'option1:option3, option2:option4, option3:option1, option4:option2',
                                    options: [
                                        { id: 'option1', left: 'Morning', right: 'Salut / ceau' },
                                        { id: 'option2', left: 'Day', right: 'Bună seara' },
                                        { id: 'option3', left: 'Anytime', right: 'Bună dimineața' },
                                        { id: 'option4', left: 'Evening', right: 'Bună ziua' },
                                    ],
                                    orderNumber: 11,
                                },
                                {
                                    type: ExerciseType.PRONUNCIATION_CHALLENGE,
                                    audioUrl: '/audio/thankyou.mp3',
                                    prompt: 'Listen and repeat',
                                    correctAnswer: 'mulțumesc',
                                    orderNumber: 12,
                                },
                                {
                                    type: ExerciseType.PRONUNCIATION_CHALLENGE,
                                    audioUrl: '/audio/yourewelcome.mp3',
                                    prompt: 'Listen and repeat',
                                    correctAnswer: 'cu plăcere',
                                    orderNumber: 13,
                                },
                                {
                                    type: ExerciseType.PRONUNCIATION_CHALLENGE,
                                    audioUrl: '/audio/sorry.mp3',
                                    prompt: 'Listen and repeat',
                                    correctAnswer: 'scuze',
                                    orderNumber: 14,
                                },
                                {
                                    type: ExerciseType.PRONUNCIATION_CHALLENGE,
                                    audioUrl: '/audio/please.mp3',
                                    prompt: 'Listen and repeat',
                                    correctAnswer: 'vă rog',
                                    orderNumber: 15,
                                },
                                {
                                    type: ExerciseType.WORD_ORDER,
                                    prompt:
                                        'Ordonează cuvintele pentru a forma propoziția corectă',
                                    correctAnswer: 'eu mă numesc andrei',
                                    options: [
                                        { id: 'option1', text: 'numesc | eu | mă | Andrei' },
                                        {
                                            id: 'option2',
                                            text: 'eu | mă | numesc | Andrei',
                                            correct: true,
                                        },
                                        { id: 'option3', text: 'mă | numesc | eu | Andrei' },
                                    ],
                                    orderNumber: 16,
                                },
                                {
                                    type: ExerciseType.WORD_ORDER,
                                    prompt:
                                        'Ordonează cuvintele pentru a forma propoziția corectă',
                                    correctAnswer: 'este bună ziua',
                                    options: [
                                        { id: 'option1', text: 'ziua | bună | este' },
                                        {
                                            id: 'option2',
                                            text: 'este | bună | ziua',
                                            correct: true,
                                        },
                                        { id: 'option3', text: 'bună | ziua | este' },
                                    ],
                                    orderNumber: 17,
                                },
                                {
                                    type: ExerciseType.WORD_ORDER,
                                    prompt:
                                        'Ordonează cuvintele pentru a forma propoziția corectă',
                                    correctAnswer: 'încântat de cunoștință',
                                    options: [
                                        { id: 'option1', text: 'cunoștință | de | încântat' },
                                        {
                                            id: 'option2',
                                            text: 'încântat | de | cunoștință',
                                            correct: true,
                                        },
                                        { id: 'option3', text: 'de | încântat | cunoștință' },
                                    ],
                                    orderNumber: 18,
                                },
                                {
                                    type: ExerciseType.AUDIO_TYPING,
                                    audioUrl: '/audio/goodmorning.mp3',
                                    prompt:
                                        'Repetă fraza și înregistrează-ți vocea pentru verificare!',
                                    correctAnswer: 'bună dimineața eu sunt ana',
                                    orderNumber: 19,
                                },
                                {
                                    type: ExerciseType.WORD_ORDER,
                                    prompt: 'Rearrange the words',
                                    correctAnswer: 'Eu mă numesc Andrei',
                                    options: [
                                        { id: 'option1', text: 'numesc | eu | mă | Andrei' },
                                        {
                                            id: 'option2',
                                            text: 'eu | mă | numesc | Andrei',
                                            correct: true,
                                        },
                                        { id: 'option3', text: 'mă | numesc | eu | Andrei' },
                                    ],
                                    orderNumber: 20,
                                },
                                {
                                    type: ExerciseType.WORD_ORDER,
                                    prompt: 'Rearrange the words',
                                    correctAnswer: 'Vă rog ajutați-mă',
                                    options: [
                                        { id: 'option1', text: 'rog | vă | ajutați-mă' },
                                        {
                                            id: 'option2',
                                            text: 'vă | rog | ajutați-mă',
                                            correct: true,
                                        },
                                        { id: 'option3', text: 'ajutați-mă | vă | rog' },
                                    ],
                                    orderNumber: 21,
                                },
                                {
                                    type: ExerciseType.WORD_ORDER,
                                    prompt: 'Rearrange the words',
                                    correctAnswer: 'Încântat de cunoștință',
                                    options: [
                                        { id: 'option1', text: 'cunoștință | de | încântat' },
                                        {
                                            id: 'option2',
                                            text: 'încântat | de | cunoștință',
                                            correct: true,
                                        },
                                        { id: 'option3', text: 'de | încântat | cunoștință' },
                                    ],
                                    orderNumber: 22,
                                },
                                {
                                    type: ExerciseType.WORD_ORDER,
                                    prompt: 'Rearrange the words',
                                    correctAnswer: 'mulțumesc! cu plăcere!',
                                    options: [
                                        { id: 'option1', text: 'plăcere | cu | mulțumesc' },
                                        {
                                            id: 'option2',
                                            text: 'mulțumesc! | cu | plăcere!',
                                            correct: true,
                                        },
                                        { id: 'option3', text: 'cu | mulțumesc | plăcere' },
                                    ],
                                    orderNumber: 23,
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            orderNumber: 2,
            title: 'The Romanian Alphabet',
            objective: 'Learn the Romanian alphabet and pronunciation',
            level: Level.A1,
            language: {
                connect: {
                    id: 1,
                },
            },
            lessons: {
                create: [
                    {
                        title: 'Vowels',
                        content: 'Learn the Romanian vowels and their pronunciation',
                        orderNumber: 1,
                        premium: false,
                        exercises: {
                            create: [
                                {
                                    type: ExerciseType.ALPHABET_OVERVIEW,
                                    prompt: 'Explore the Romanian vowels',
                                    correctAnswer: 'viewed',
                                    options: {
                                        letters: [
                                            {
                                                letter: 'A',
                                                pronunciation: 'ah',
                                                example: 'apă (water)',
                                                audioUrl: '/audio/a.mp3',
                                            },
                                            {
                                                letter: 'Ă',
                                                pronunciation: 'uh',
                                                example: 'măr (apple)',
                                                audioUrl: '/audio/a_breve.mp3',
                                            },
                                            {
                                                letter: 'Â',
                                                pronunciation: 'uh',
                                                example: 'mână (hand)',
                                                audioUrl: '/audio/a_circumflex.mp3',
                                            },
                                            {
                                                letter: 'E',
                                                pronunciation: 'eh',
                                                example: 'este (is)',
                                                audioUrl: '/audio/e.mp3',
                                            },
                                            {
                                                letter: 'I',
                                                pronunciation: 'ee',
                                                example: 'inimă (heart)',
                                                audioUrl: '/audio/i.mp3',
                                            },
                                            {
                                                letter: 'Î',
                                                pronunciation: 'uh',
                                                example: 'început (beginning)',
                                                audioUrl: '/audio/i_circumflex.mp3',
                                            },
                                            {
                                                letter: 'O',
                                                pronunciation: 'oh',
                                                example: 'om (man)',
                                                audioUrl: '/audio/o.mp3',
                                            },
                                            {
                                                letter: 'U',
                                                pronunciation: 'oo',
                                                example: 'unu (one)',
                                                audioUrl: '/audio/u.mp3',
                                            },
                                        ],
                                    },
                                    orderNumber: 1,
                                },
                                {
                                    type: ExerciseType.AUDIO_TYPING,
                                    audioUrl: '/audio/vowels.mp3',
                                    prompt: 'Type the vowels you hear',
                                    correctAnswer: 'aăâeiîou',
                                    orderNumber: 2,
                                },
                            ],
                        },
                    },
                    {
                        title: 'Consonants (Part 1)',
                        content: 'Learn the first group of Romanian consonants',
                        orderNumber: 2,
                        premium: false,
                        exercises: {
                            create: [],
                        },
                    },
                    {
                        title: 'Consonants (Part 2)',
                        content: 'Learn the second group of Romanian consonants',
                        orderNumber: 3,
                        premium: false,
                        exercises: {
                            create: [],
                        },
                    },
                ],
            },
        },
    ];

    for (const unit of unitsData) {
        await prisma.unit.create({
            data: unit,
        });
    }
}

// biome-ignore lint/correctness/noUnusedVariables: <call to clean the database but keep tables>
async function cleanTables() {
    await prisma.exerciseAttempt.deleteMany({});
    await prisma.exercise.deleteMany({});
    await prisma.userLessonProgress.deleteMany({});
    await prisma.lesson.deleteMany({});
    await prisma.unit.deleteMany({});
    await prisma.language.deleteMany({});
    await prisma.user.deleteMany({});
}

// biome-ignore lint/correctness/noUnusedVariables: <call to destroy the database>
async function destroy() {
    // drop the database
    await prisma.$executeRaw`DROP SCHEMA public CASCADE;`;

    console.log('Successfully destroyed database');
}

async function main() {
    try {
        // First create languages
        console.log('🌱 Seeding languages...');
        await createLanguages();
        console.log('✅ Languages seeded successfully');

        // Then create units (which depend on languages)
        console.log('🌱 Seeding units...');
        await createUnits();
        console.log('✅ Units seeded successfully');

        console.log('🌱 Database seeded successfully');
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        throw error;
    }
}

// Execute the main function
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
