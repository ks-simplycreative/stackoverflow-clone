import { Outlet, RouteObject } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { QuestionsOverviewPage } from "./QuestionsOverviewPage";
import { QuestionDetailPage } from "./QuestionDetailPage";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: (
            <MainLayout>
                <Outlet />
            </MainLayout>
        ),
        children: [
            {
                index: true,
                element: <QuestionsOverviewPage />
            },
            {
                path: ":id",
                element: <QuestionDetailPage />
            }
        ]
    }
]