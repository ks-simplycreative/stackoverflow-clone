import { Link } from "react-router-dom";
// import { graphql } from "../gql";
import { gql, useQuery } from '@apollo/client';


interface Question {
    _id: number;
    title: string;
    body: string;
    author: string;
    tags: string[];
    createdAt: string;
    votes: number;
    answers: Answer[];
}

interface Answer {
    _id: number;
    body: string;
    author: string;
    createdAt: string;
    votes: number;
}

const questionOverviewDocument = gql(/* GraphQL */ `
  query QuestionOverviewPage {
    questions {
      _id
      title
      body
      author
      tags
      createdAt
      votes
      answers {
        _id
        body
        author
        createdAt
        votes
      }
    }
  }
`);


// const fakeData: Question[] = [
//     {
//         _id: 1,
//         title: 'How do i open svg files?',
//         body: 'Hello, I was wondering how to open svg files. I tried using MS Paint but it wont open',
//         author: 'Clueless Designer',
//         tags: ['Design', 'Webdesigner'],
//         createdAt: '20/12/2012, 03:00:00',
//         votes: 2,
//         answers: [
//             {
//                 _id: 1,
//                 body: 'Try using a can opener. If that doesn\'t work, you might need to use a software that supports SVG files like Adobe Illustrator.',
//                 author: 'Sarcastic Developer',
//                 createdAt: '20/12/2012, 03:30:00',
//                 votes: 2
//             },
//         ],
//     },
//     {
//         _id: 2,
//         title: 'I deleted my recycling bin, how to get it back?',
//         body: 'body text',
//         author: 'Clueless User',
//         tags: ['PC', 'help'],
//         createdAt: '20/12/2012, 03:00:00',
//         votes: 2,
//         answers: [
//             {
//                 _id: 2,
//                 body: 'Did you look in the recycling bin? Oh wait...',
//                 author: 'Joking User',
//                 createdAt: '20/12/2012, 03:30:00',
//                 votes: 180
//             },
//         ],
//     },
//     {
//         _id: 3,
//         title: 'Why isn\'t my mouse working?',
//         body: 'I\'ve tried watering it, feeding it cheese, but it still won\'t move. What am I doing wrong?',
//         author: 'Confused User',
//         tags: ['Hardware', 'Mouse'],
//         createdAt: '20/12/2012, 03:00:00',
//         votes: 3,
//         answers: [
//             {
//                 _id: 3,
//                 body: 'It seems like your mouse is on a cheese diet. Try switching to a digital mouse instead.',
//                 author: 'Humorous Tech Support',
//                 createdAt: '20/12/2012, 03:30:00',
//                 votes: 0,
//             },
//         ],
//     },
//     {
//         _id: 4,
//         title: 'How do I turn on my computer?',
//         body: 'I\'ve tried saying "please" and "thank you", but it still won\'t turn on. Any suggestions?',
//         author: 'Polite User',
//         tags: ['PC', 'help'],
//         createdAt: '20/12/2012, 03:00:00',
//         votes: 1,
//         answers: [
//             {
//                 _id: 4,
//                 body: 'Have you tried whispering sweet nothings? If that doesn\'t work, there\'s always the power button.',
//                 author: 'Witty IT Guy',
//                 createdAt: '20/12/2012, 03:30:00',
//                 votes: 10,
//             },
//         ],
//     },
//     {
//         _id: 5,
//         title: 'Why does my computer need sleep mode?',
//         body: 'Does it get tired? Should I read it a bedtime story?',
//         author: 'Curious User',
//         tags: ['PC', 'Sleep Mode'],
//         createdAt: '20/12/2012, 03:00:00',
//         votes: 4,
//         answers: [
//             {
//                 _id: 5,
//                 body: 'Yes, computers get tired too. They dream of electric sheep.',
//                 author: 'Sci-fi Fan',
//                 createdAt: '20/12/2012, 03:30:00',
//                 votes: 124
//             },
//         ],
//     },
//     {
//         _id: 6,
//         title: 'My computer says I have cookies. Where are they?',
//         body: 'I\'ve checked all the drawers and I can\'t find them. Are they chocolate chip?',
//         author: 'Hungry User',
//         tags: ['PC', 'Cookies'],
//         createdAt: '20/12/2012, 03:00:00',
//         votes: 5,
//         answers: [
//             {
//                 _id: 6,
//                 body: 'They are hidden in the cookie jar of your browser. Unfortunately, they are not edible.',
//                 author: 'Cookie Monster',
//                 createdAt: '20/12/2012, 03:30:00',
//                 votes: 4
//             },
//         ],
//     },
//     {
//         _id: 7,
//         title: 'Why does my computer keep freezing?',
//         body: 'My computer keeps freezing. Should I get it a sweater?',
//         author: 'Cold User',
//         tags: ['PC', 'Freezing'],
//         createdAt: '20/12/2012, 03:30:00',
//         votes: 3,
//         answers: [
//             {
//                 _id: 7,
//                 body: 'No need for a sweater, your computer just needs a good defrosting. Try restarting it.',
//                 author: 'Tech Guru',
//                 createdAt: '20/12/2012, 03:30:00',
//                 votes: 2
//             },
//             {
//                 _id: 8,
//                 body: 'It might be a software issue. Try updating your system.',
//                 author: 'Helpful User',
//                 createdAt: '20/12/2012, 03:30:00',
//                 votes: 5
//             }
//         ],
//     },
//     {
//         _id: 8,
//         title: 'Why does my computer have a hard drive?',
//         body: 'My computer has a hard drive. Does it need a driver\'s license?',
//         author: 'Driving User',
//         tags: ['PC', 'Hard Drive'],
//         createdAt: '20/12/2012, 03:30:00',
//         votes: 4,
//         answers: [
//             {
//                 _id: 9,
//                 body: 'No driver\'s license needed, your computer is already on the information superhighway.',
//                 author: 'Witty IT Guy',
//                 createdAt: '20/12/2012, 03:30:00',
//                 votes: 3
//             },
//             {
//                 _id: 10,
//                 body: 'The hard drive is where your computer stores data. No driving involved.',
//                 author: 'Practical User',
//                 createdAt: '20/12/2012, 03:30:00',
//                 votes: 6
//             }
//         ],
//     },
//     {
//         _id: 9,
//         title: 'Why does my computer have ports?',
//         body: 'My computer has ports. Can it set sail?',
//         author: 'Sailing User',
//         tags: ['PC', 'Ports'],
//         createdAt: '20/12/2012, 03:30:00',
//         votes: 5,
//         answers: [
//             {
//                 _id: 11,
//                 body: 'No need for a life jacket, these ports are for connecting devices to your computer.',
//                 author: 'Tech Savvy',
//                 createdAt: '20/12/2012, 03:30:00',
//                 votes: 4
//             },
//             {
//                 _id: 12,
//                 body: 'Your computer won\'t be setting sail, but it can connect to a sea of devices.',
//                 author: 'Humorous Tech Support',
//                 createdAt: '20/12/2012, 03:30:00',
//                 votes: 7
//             }
//         ],
//     },
//     {
//         _id: 10,
//         title: 'Why does my computer have a fan?',
//         body: 'My computer has a fan. Is it a celebrity?',
//         author: 'Starstruck User',
//         tags: ['PC', 'Fan'],
//         createdAt: '20/12/2012, 03:30:00',
//         votes: 6,
//         answers: [
//             {
//                 _id: 13,
//                 body: 'It\'s not a celebrity, but it does perform under pressure. The fan keeps your computer cool.',
//                 author: 'Helpful User',
//                 createdAt: '20/12/2012, 03:30:00',
//                 votes: 5
//             },
//             {
//                 _id: 14,
//                 body: 'Your computer might not be signing autographs, but the fan is there to prevent overheating.',
//                 author: 'Tech Guru',
//                 createdAt: '20/12/2012, 03:30:00',
//                 votes: 8
//             }
//         ],
//     }
// ]

export const QuestionsOverviewPage: React.FC = () => {
    const { data } = useQuery(questionOverviewDocument);
    console.log(data)

    return (
        <div className="questions-overview-content">
            {data?.questions?.map((question: Question) =>
                <Link to={`${question._id}`}>
                    <div className="question-card">
                        <div className="question-stats">
                            <span>Votes: {question.votes}</span>
                            <span>Answers: {question.answers.length}</span>
                        </div>
                        <div className="question-main">
                            <h2>{question.title}</h2>
                            <p>{question.body}</p>
                            <div className="question-info">
                                <div className="tags">{question.tags.map((tag) => <div className="tag">{tag}</div>)}</div>
                                <div className="flex-col">
                                    <span>Author:</span>
                                    <span>{question.author}</span>
                                </div>
                                <div className="flex-col">
                                    <span>Created at:</span>
                                    <span>{question.createdAt}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    )
}
