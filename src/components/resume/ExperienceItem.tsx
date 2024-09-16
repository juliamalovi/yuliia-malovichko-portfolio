import { PropsWithChildren } from 'react'

interface ExperienceItemProps {
    title: string;
    date: string;
    points: string[];
    showBorder?: boolean;
}

const ExperienceItem = ({ title, date, points, showBorder }: PropsWithChildren<ExperienceItemProps>) => {
    return (
        <div className={`space-y-4 pt-8 ${showBorder ? 'pb-8 border-b border-gray-200' : ''}`}>
                <h2 className="text-xl font-bold">{title}</h2>
                <h3 className="text-xl mb-4">{date}</h3>
                <ul className="text-gray-500 list-disc list-inside space-y-2">
                    {points.map((point) => <li key={point}>{point}</li>)}

                </ul>
        </div>
    )
}

export default ExperienceItem