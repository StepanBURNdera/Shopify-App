import {Button, DisplayText, Heading, Page} from "@shopify/polaris";


const InitPage = (props) => {
    return(
        <Page>
            <Layout>
                <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", width: '100%', height: '100%'}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <Heading>
                            TopSale Countdown Banner
                        </Heading>
                        <DisplayText size="medium">
                            Increase sales with urgency, countdown timer, labels and awesome banners
                        </DisplayText>
                        <Button
                            primary
                            type={"submit"}
                            onClick={() => {
                                props.setInitBar(true)
                            }}
                        >
                            Create Banner
                        </Button>
                    </div>
                    <img src={'https://assets3.lottiefiles.com/private_files/lf30_mQLlnH.json'} alt={'sale'}/>
                </div>
            </Layout>
        </Page>
    )
};

export default InitPage