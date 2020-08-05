import {Button, EmptyState, Heading, Page} from "@shopify/polaris";
import Link from "next/link"
import {useSelector} from "react-redux";

const PopupSuccess = () => {

    const strings = useSelector(state => state.localesReducer.stringsToDisplay.strings.success);

    return (
        <Page>
            <EmptyState
                heading={strings.mainHeading}
                image={'https://lil-proxy.herokuapp.com/static/revenue.jpg'}
            >
                <Heading>{strings.messagePopup}</Heading>
                <Link href={'/'}><Button primary>{strings.button}</Button></Link>
            </EmptyState>
        </Page>
    )
};

export default PopupSuccess