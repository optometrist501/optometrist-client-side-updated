import React, { useEffect, useState } from 'react';
import banner from './Banner.module.css';
import Lottie from 'react-lottie';
import loadingData from '../lottieFiles/97930-loading.json';

const Banner = ({ darkmode }) => {
    const [updateModal, setUpdateModal] = useState(100);
    const [sectionController, setSectionController] = useState(1);

    const handleModalSection = (value) => {
        if (value === 1) {
            setSectionController(1)
        }
        if (value === 2) {
            setSectionController(2)
        }
    }
    // lottie animation
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingData,
    };
    const [data, setData] = useState([]);


    const [copiedData, setCopiedData] = useState([]);


    const [count, setCount] = useState(0);
    const [pause, setPause] = useState(false);

    useEffect(() => {
        const url = 'banner.json';
        fetch(url).then(res => res.json()).then(res => setData(res))
    }, [])

    const findImageIdMapped = data?.map(m => {
        return m._id
    })

    const findImageId = findImageIdMapped?.slice(0, 1)

    const findFirstImage = data?.find(f => {
        return f._id === findImageId[0]
    })

    useEffect(() => {
        const handleTransition = () => {
            if (pause) {
                const increase = count + 0;
                setCount(increase)
            } else {
                const increase = count + 1;
                setCount(increase)
            }

            if ((data?.length) <= (count)) {
                setCount(0)
            }
            if (copiedData) {
                if (data) {
                    setCopiedData([...data, findFirstImage])
                }
            }
        };
        const interval = setInterval(handleTransition, 6000)
        return () => {
            clearInterval(interval);
        };
    }, [count, data, copiedData, findFirstImage, pause]);
    return (
        <div className={banner.banner}>
            <div className={banner.bannerMain}>

                {
                    data ? copiedData?.map(d =>
                        <div key={d.id}
                            style={{
                                transition: `transform ${count > 0 ? 2 : 0}s`,
                                transform: `translateX(${count * -100}%)`,
                            }}

                        >
                            <div
                                style={{ width: '92vw', marginTop: '92px' }}
                                onMouseEnter={() => setPause(true)}
                                onMouseLeave={() => setPause(false)}
                            >
                                <img className={banner.bannerImage} style={{ height: '56vh', width: '92vw' }} src={d?.imageLink} alt="" />
                                <div className={banner.editAndDelete}>
                                    <span onClick={() => setUpdateModal(0)} ><i className="uil uil-edit cursor-pointer"></i></span>
                                    <span><i className="uil uil-trash-alt ml-3 cursor-pointer"></i></span>
                                </div>
                            </div>
                        </div>

                    )
                        :
                        <div className={banner.lottieAnimation}>
                            <Lottie options={defaultOptions} />
                        </div>
                }
            </div>
            <div className={banner.bannerSlideController}>
                <div className={banner.bannerSlideControllerMain}>
                    <span onClick={() => setCount(count === 1 ? () => setCount(data?.result?.length) : count - 1)}><i class="uil uil-angle-left-b"></i></span>
                    <span onClick={() => setCount(count === data?.result?.length ? () => setCount(0) : count + 1)}><i class="uil uil-angle-right-b"></i></span>
                </div>
            </div>
            <div style={{ transform: `translateX(${updateModal}%)`, transition: 'transform 2s' }} className={`${banner.updateModal} ${darkmode ? 'bg-black text-white' : 'bg-white'}`}>

                <div style={{ transition: '1s ease-in-out' }} className={`${banner.updateModalContainer} ${darkmode ? 'bg-black text-white' : 'bg-white'}`}>
                    <span onClick={() => setUpdateModal(100)}><i className="uil uil-times cursor-pointer text-2xl ml-5"></i></span>
                    <br />
                    <br />
                    <hr />
                    <div className={banner.bannerImgPreview}>
                        {
                            data && copiedData?.map(banners => {
                                return (
                                    <div className={banner.bannerImgPreviewContainer}>
                                        <img src={banners?.imageLink} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className={banner.eventModalSectionButtons}>
                        <p onClick={() => handleModalSection(1)} className={banner.eventUpdatebutton}><i class="uil uil-edit mr-2"></i> UPDATE</p>
                        <p onClick={() => handleModalSection(2)} className={banner.addEventsNewButton}><i class="uil uil-plus-circle mr-2"></i> ADD NEW</p>
                    </div>
                    <div className={banner.eventModalSectionButtons}>
                        <p className={`${banner.eventUpdateLine} ${sectionController === 1 && banner.brownColor} `}></p>
                        <p className={`${banner.addEventsNewLine} ${sectionController === 2 && banner.brownColor} `}></p>
                    </div>
                    <div className={banner.ModalSectionContainer}>
                        <div className={`${sectionController === 1 ? 'block' : 'none'} ${banner.eventUpdateModalSection}`}>

                            <div className={banner.eventsImgSectionMain}>

                                <div type="file" className={banner.eventsImgSection}>
                                    <div className={banner.chooseFileDesign}>
                                        <p className='text-white font-bold'><i class="uil uil-upload"></i> <span>Choose File</span></p>
                                        <input className={banner.chooseFile} type="file" name="" id="" />
                                    </div>


                                </div>
                            </div>
                            <div className={banner.updateEventButton}>
                                <button className='btn btn-primary mr-10'><i class="uil uil-edit mr-1"></i>update Banner</button>
                            </div>
                        </div>

                        <div className={`${sectionController === 2 ? 'block' : 'none'} ${banner.eventAddNewModalSection}`}>


                            <div className={banner.eventsImgSectionMain}>

                                <div type="file" className={banner.eventsImgSection}>
                                    <div className={banner.chooseFileDesign}>
                                        <p className='text-white font-bold'><i class="uil uil-upload"></i> <span>Choose File</span></p>
                                        <input className={banner.chooseFile} type="file" name="" id="" />
                                    </div>


                                </div>
                            </div>
                            <div className={banner.updateEventButton}>
                                <button className='btn btn-primary mr-10'><i class="uil uil-plus-circle mr-2"></i>Add Banner</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;