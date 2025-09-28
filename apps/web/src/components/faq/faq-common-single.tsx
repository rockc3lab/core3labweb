import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
type FaqCommonSingleProps = {
  serial: string;
  question: string;
  answer: React.ReactNode;
  classNames?: string;
};
const FaqCommonSingle = ({
  serial,
  question,
  answer,
}: FaqCommonSingleProps) => {
  return (
    <AccordionItem value={serial}>
      <AccordionTrigger className="flex items-start flex-start hover:no-underline">
        <span className="number-serial">{serial}</span>
        <h3 className="text-xl font-bold">{question}</h3>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqCommonSingle;
