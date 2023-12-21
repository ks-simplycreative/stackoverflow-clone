import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { graphql } from "../gql";
import { LiaArrowUpSolid, LiaArrowDownSolid } from "react-icons/lia";

const upvoteQuestionDocument = graphql(/* GraphQL */ `
  mutation UpvoteQuestion($id: ID!) {
    upvoteQuestion(id: $id) {
      _id
      votes
    }
  }
`);

const downvoteQuestionDocument = graphql(/* GraphQL */ `
  mutation DownvoteQuestion($id: ID!) {
    downvoteQuestion(id: $id) {
      _id
      votes
    }
  }
`);

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
    const [upvoteQuestion] = useMutation(upvoteQuestionDocument);
    const [downvoteQuestion] = useMutation(downvoteQuestionDocument);

    const question = data?.questionById;

    return (
        <div className="question-detail-content">
            {
                question ? (
                    <div>
                        <div className="question-detail-title">
                            <h2>{question.title}</h2>
                            <div className="tags">
                                {question.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="question-detail">
                            <div className="votes">
                                <button className="vote" onClick={() => upvoteQuestion({ variables: { id: question._id } })}><LiaArrowUpSolid /></button>
                                <h3>{question.votes}</h3>
                                <button className="vote" onClick={() => downvoteQuestion({ variables: { id: question._id } })}><LiaArrowDownSolid /></button>
                            </div>
                            <div className="detail-body">
                                <p>{question.body}</p>
                                <div>
                                    <span>Asked by {question.author} on {question.createdAt}</span>
                                </div>
                            </div>
                        </div>
                        <h2 className="answer-detail-title">{question.answers.length} Answer{question.answers.length > 1 ? 's' : ''}</h2>
                        {question.answers.map((answer, index) => (
                            <div className="answer-detail" key={index}>
                                <div className="votes">
                                    <button className="vote"><LiaArrowUpSolid /></button>
                                    <h3>{answer.votes}</h3>
                                    <button className="vote"><LiaArrowDownSolid /></button>
                                </div>
                                <div className="detail-body">
                                    <p>{answer.body}</p>
                                    <div>
                                        <span>Answered by {answer.author} on {new Date(answer.createdAt).toLocaleDateString()}</span>
                                        <div>
                                            <span>{answer.votes} Votes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (<div>Question not Found</div>)
            }
        </div>
    )
}