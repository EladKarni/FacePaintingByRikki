import Accordion from "react-bootstrap/Accordion";
import styles from "@/styles/Questions.module.scss";

const QASection = () => {
    return (
        <div className={styles.questions}>
            <h1>FAQS</h1>
            <Accordion className={styles.accordion}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        What kinds of paints do you use?
                    </Accordion.Header>
                    <Accordion.Body>
                        Rikki and her artists use high-quality industry standard face
                        abd body paints which are hypoallergenic and include
                        antobacterial agents. If a guest has very sensitive skin,
                        please ask for a swatch test at the beginning of the event
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Who is coming to paint?</Accordion.Header>
                    <Accordion.Body>
                        Rikki is the lead painter, and she has a small stable of
                        painters hand picked who work up to her standards. You will
                        know who your painter is before your event
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How much does it cost?</Accordion.Header>
                    <Accordion.Body>
                        Due to the many details involved in the event entertainment,
                        individual quoptes are provided for each client. Please
                        contact Rikki using the form below for your quote.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default QASection
