import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { graphql } from "../gql";

const questionDetailDocument = graphql(/* GraphQL */ `
  query QuestionDetail($id: ID!) {
    questionById(id: $id) {
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

export const QuestionDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data } = useQuery(questionDetailDocument, { variables: { id: id! } });
    const question = data?.questionById;

    return (
        <div className="question-detail-content">
            {
                question ? (
                    <div>
                        <div className="question-detail-title">
                            <h2>{question.title}</h2>
                        </div>
                        {question.body}
                        {question.author}
                        {question.tags}
                        {question.createdAt}
                        {question.votes}
                        {question.answers.map((answer: any) => (
                            <div>
                                {answer.body}
                                {answer.author}
                                {answer.createdAt}
                                {answer.votes}
                            </div>
                        ))}
                    </div>
                ) : (<div>Question not Found</div>)
            }
        </div>
    )
}