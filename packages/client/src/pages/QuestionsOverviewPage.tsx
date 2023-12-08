import { Link } from "react-router-dom";

interface Question {
    id: number;
    title: string;
    body: string;
    author: string;
    tags: string[];
    createdAt: Date;
    votes: number;
    answers: Answer[];
}

interface Answer {
    id: number;
    body: string;
    author: string;
    createdAt: Date;
    votes: number;
}

const fakeData: Question[] = [
    {
        id: 1,
        title: 'How do i open svg files?',
        body: 'Hello, I was wondering how to open svg files. I tried using MS Paint but it wont open',
        author: 'Clueless Designer',
        tags: ['Design', 'Webdesigner'],
        createdAt: new Date(),
        votes: 2,
        answers: [],
    },
    {
        id: 2,
        title: 'I deleted my recycling bin, how to get it back?',
        body: 'body text',
        author: 'Clueless User',
        tags: ['PC', 'help'],
        createdAt: new Date(),
        votes: 2,
        answers: [
        ],
    }
]

export const QuestionsOverviewPage: React.FC = () => {
    return (
        <div className="questions-overview-content">
            {fakeData.map((data) =>
                <Link to={`${data.id}`}>
                    <div className="question-card">
                        <div className="question-stats">
                            <span>Votes: {data.votes}</span>
                            <span>Answers: {data.answers.length}</span>
                        </div>
                        <div className="question-main">
                            <h2>{data.title}</h2>
                            <p>{data.body}</p>
                            <div className="question-info">
                                <div className="tags">{data.tags.map((tag) => <div className="tag">{tag}</div>)}</div>
                                {data.author}
                                {data.createdAt.toDateString()}
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    )
}