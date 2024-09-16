import { PropsWithChildren } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"

interface ResumeContainerProps {
    title: string;
    description?: string;
}

const ResumeContainer = ({ title, description, children }: PropsWithChildren<ResumeContainerProps>) => {

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter className="flex justify-between">

            </CardFooter>
        </Card>
    )
}

export default ResumeContainer