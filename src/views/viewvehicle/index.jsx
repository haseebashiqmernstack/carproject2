import Layout from '../../components/layout/layout';
import './index.css';
import mecedees from '../images/Mercedes.jpg';
const ViewVehicle = () => {
    return (<>
        <div className="container">
            <Layout>
                <div className="main-content">

                    <section className="v-vehicle-section flex flex-row">
                        <div className="img-box-v-v">
                            <img src={mecedees} />
                        </div>
                        <div className="des-v-v">
                            <div className="flex flex-column">
                                <div className="view-page-timer flex flex-row">
                                    <div className="timer-title">
                                        <i class="far fa-clock"></i> Remaining Time:
                                    </div>
                                    <div className="timer flex flex-row flex-justify-center flex-items-center">
                                        <div className="flex flex-column flex-justify-center flex-items-center">
                                            <div className="dayss"></div>
                                            <span>days</span>
                                        </div>
                                        <div className="flex flex-column flex-justify-center flex-items-center">
                                            <div className="hourss"></div>
                                            <span>hours</span>
                                        </div>
                                        <div className="flex flex-column flex-justify-center flex-items-center">
                                            <div className="minss"></div>
                                            <span>mins</span>
                                        </div>
                                        <div className="flex flex-column flex-justify-center flex-items-center">
                                            <div className="secs"></div>
                                            <span>sec</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="view-page-description">Description</div>
                            </div>
                        </div>
                    </section>


                </div>
            </Layout>
        </div>


    </>)
}
export default ViewVehicle;