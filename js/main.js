//Loader
const loader = () => {
    window.onload = () => {
        const preloader = document.querySelector(".preloader");
        const circle = document.querySelector(".preloader__ring-circle");
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        let valueItem = document.querySelector(".preloader__value-num-inner");

        circle.style.strokeDasharray = `${circumference},${circumference}`;
        circle.style.strokeDashoffset = circumference;

        const setProgress = (percent) => {
            const offsetA = circumference - percent / 100 * circumference;
            circle.style.strokeDashoffset = offsetA;
        };

        const counter = () => {
            if (navigator.userAgent.search(/Firefox/) > 0) {
                valueItem.style.top = `-295px`;
            } else {
                valueItem.style.top = `-329px`;
            }
        };

        const loaderDis = setTimeout(()=> {
            preloader.classList.add("preloader_disabled");

        }, 3000);

        //svg bag

        // if (navigator.userAgent.search(/Safari/) > 0) {
        //     circle.style.transformOrigin = "122px 122px";
        // }
        //
        // if (navigator.userAgent.search(/Chrome/) > 0) {
        //     circle.style.transformOrigin = "center";
        // }

        counter();
        setProgress(100);
    };
};
loader();

//navbar
const navbar = () => {
    const menuBtn = document.querySelectorAll(".menu__btn");
    const nav = document.querySelectorAll(".menu__nav");
    const menuNavBtn = document.querySelectorAll(".menu__nav-btn");

    const action = () => {
        for (let i = 0; i < menuBtn.length; i++) {
            menuBtn[i].addEventListener('click', () => {
                menuBtn[i].classList.toggle("menu__btn_active");
                nav[i].classList.toggle("menu__nav_active");
            })
        }

        for (let i = 0; i < menuNavBtn.length; i++) {
            menuNavBtn[i].addEventListener("click", ()=> {
                for (let j = 0; j < menuBtn.length; j++) {
                    menuBtn[j].classList.remove("menu__btn_active");
                    nav[j].classList.remove("menu__nav_active");
                }
            })
        }
    };
    action();
};
navbar();

//videoPlay
const videoBtn = document.querySelector(".end__item-video-btn");
const videoUrl = 'https://www.youtube.com/embed/AGNiJ7ApFdE?autoplay=1&loop=1&&playlist=Video_ID';
const videoItem = document.querySelector(".end__item-video");
const videoFrame = document.querySelector(".end__item-video-iframe");

const videoPlay = () => {
    videoBtn.addEventListener("click", ()=> {
        videoBtn.style.display = "none";
        videoItem.style.display = "block";
        videoFrame.src = videoUrl;
    })
};
videoPlay();
//map cards show
const mapCard = document.querySelectorAll(".map__card");
const mapCircle = document.querySelectorAll(".map__svg-g");
const mapCardExit = document.querySelectorAll(".map__card-exit");

const mapCardShow = () => {
    for (let i = 0; i < mapCard.length; i++) {
        mapCircle[i].addEventListener("click", ()=> {
            mapCard[i].classList.toggle("map__card_active");
            mapCircle.forEach((i)=> {
                i.style.pointerEvents = "none";
            })
        });
        mapCardExit[i].addEventListener("click", ()=> {
            mapCard[i].classList.remove("map__card_active");
            mapCircle.forEach((i)=> {
                i.style.pointerEvents = "auto";
            })
        })
    }
};
mapCardShow();
//item decor animation
const itemDecor = document.querySelectorAll(".item__decor");

const itemDecorMotionOn = () => {
    for (let i = 0; i < itemDecor.length; i++) {
        itemDecor[i].classList.add('transform-off');
    }
};
const itemDecorMotionOff = () => {
    for (let i = 0; i < itemDecor.length; i++) {
        itemDecor[i].classList.remove('transform-off')
    }
};
//item decor _l animation
const itemDecor_l = document.querySelectorAll(".item__decor_l");
const itemDecorMotionOn_l = () => {
    for (let i = 0; i < itemDecor_l.length; i++) {
        itemDecor_l[i].classList.add('transform-off');
    }
};
const itemDecorMotionOff_l = () => {
    for (let i = 0; i < itemDecor_l.length; i++) {
        itemDecor_l[i].classList.remove('transform-off')
    }
};

//item decor _m animation
const itemDecor_m = document.querySelectorAll(".item__decor_m");
const itemDecorMotionOn_m = () => {
    for (let i = 0; i < itemDecor_m.length; i++) {
        itemDecor_m[i].classList.add('transform-off');
    }
};
const itemDecorMotionOff_m = () => {
    for (let i = 0; i < itemDecor_m.length; i++) {
        itemDecor_m[i].classList.remove('transform-off')
    }
};

//item decor _h animation
const itemDecor_h = document.querySelectorAll(".item__decor_h");
const itemDecorMotionOn_h = () => {
    for (let i = 0; i < itemDecor_h.length; i++) {
        itemDecor_h[i].classList.add('transform-off');
    }
};
const itemDecorMotionOff_h = () => {
    for (let i = 0; i < itemDecor_h.length; i++) {
        itemDecor_h[i].classList.remove('transform-off')
    }
};

//Map
const mapInner = document.querySelector(".map__inner");
const mapGray = document.querySelector(".map__grid_gray");
const mapOn = () => {
    mapInner.style.transform = 'none';
    mapGray.classList.add("map__grid_gray_l");
};
const mapOff = () => {
    mapInner.style.transform = 'translate(-100vw)';
    mapGray.classList.remove("map__grid_gray_l");
};

//History
const aboutDecor = document.querySelectorAll(".about__decor");
const historyOn = () => {
    for (let i = 0; i < aboutDecor.length; i++) {
        aboutDecor[i].classList.add("transform-off");
        aboutDecor[i].classList.add("opacity-on");
    }
};
const historyOff = () => {
    for (let i = 0; i < aboutDecor.length; i++) {
        aboutDecor[i].classList.remove("transform-off");
        aboutDecor[i].classList.remove("opacity-on");
    }
};

//Stat
const circleStall = document.querySelectorAll(".stat__item-ring-circle");
const circleSt = document.querySelector(".stat__item-ring-circle_m");
const circleStl = document.querySelector(".stat__item-ring-circle_l");
const chartSt = document.querySelectorAll(".stat__table-c");
const chartValue = document.querySelectorAll(".stat__table-c-value");
const chartSvg = document.querySelector(".stat__item-svg");

const statOn = () => {
    const ringProgress = () => {
            const radiusSt = circleSt.r.baseVal.value;
            const circumferenceSt = 2 * Math.PI * radiusSt;

            const radiusStl = circleStl.r.baseVal.value;
            const circumferenceStl = 2 * Math.PI * radiusStl;

            circleSt.style.strokeDasharray = `${circumferenceSt},${circumferenceSt}`;
            circleSt.style.strokeDashoffset = circumferenceSt;

            circleStl.style.strokeDasharray = `${circumferenceSt},${circumferenceSt}`;
            circleStl.style.strokeDashoffset = circumferenceStl;
            const setProgressSt = (percent) => {
                let offsetSt = circumferenceSt - percent / 100 * circumferenceSt;
                circleSt.style.strokeDashoffset = offsetSt;
            };

        const setProgressStl = (percent) => {
            let offsetStl = circumferenceStl - percent / 100 * circumferenceStl;
            circleStl.style.strokeDashoffset = offsetStl;
        };
            setProgressStl(43);
            setProgressSt(100);
    };
    ringProgress();

    for (let i = 0; i < chartSt.length; i++) {
        chartSt[i].classList.remove("height-off");
        chartValue[i].classList.remove("bottom-off")
    }
    chartSvg.classList.add("transform-off");
    itemDecorMotionOn()
};
const statOff = () => {
    circleSt.style.strokeDashoffset = '216.956px';
    circleStl.style.strokeDashoffset = '216.956px';

    for (let i = 0; i < chartSt.length; i++) {
        chartSt[i].classList.add("height-off");
        chartValue[i].classList.add("bottom-off")
    }
    chartSvg.classList.remove("transform-off");
    itemDecorMotionOff()
};
//Problems
const problemsItem = document.querySelectorAll(".reason__chart-item");

const problemsOn = () => {
    itemDecorMotionOn_l();
    for (let i = 0; i < problemsItem.length; i++) {
        problemsItem[i].classList.remove("width-off");
    }
};
const problemsOff = () => {
    itemDecorMotionOff_l();
    for (let i = 0; i < problemsItem.length; i++) {
        problemsItem[i].classList.add("width-off");
    }
};
//how
const howSvgText = document.querySelectorAll(".how__item-svg-text");
const  howSvgC0 = document.querySelector(".how__item-svg-circles0");
const  howSvgC2 = document.querySelector(".how__item-svg-circles2");

const howOn = () => {
    for (let i = 0; i < howSvgText.length; i++) {
        howSvgText[i].classList.add("transform-off");
        howSvgText[i].classList.add("opacity-on")
    }
    howSvgC0.classList.remove('how__item-svg-circles0_disabled');
    howSvgC2.classList.remove('how__item-svg-circles2_disabled');
    itemDecorMotionOn_m();
};
const howOff = () => {
    for (let i = 0; i < howSvgText.length; i++) {
        howSvgText[i].classList.remove("transform-off");
        howSvgText[i].classList.remove("opacity-on")
    }
    howSvgC0.classList.add('how__item-svg-circles0_disabled');
    howSvgC2.classList.add('how__item-svg-circles2_disabled');
    itemDecorMotionOff_m();
};
//sector
const sectorPoints = document.querySelectorAll(".sector__item-svg-item");
const sectorLine = document.querySelector(".sector__item-line");

const sectorOn = () => {
    for (let i = 0; i < sectorPoints.length; i++) {
        sectorPoints[i].classList.remove("bottom-off_help")
    }
    sectorLine.classList.remove("sector__item-line_disabled");
    itemDecorMotionOn_h();
};
const sectorOff = () => {
    for (let i = 0; i < sectorPoints.length; i++) {
        sectorPoints[i].classList.add("bottom-off_help")
    }
    sectorLine.classList.add("sector__item-line_disabled");
    itemDecorMotionOff_h();
};
//end
const endItem = document.querySelector(".end__item_l");
const endWho = document.querySelector(".end__item-who");

const endOn = () => {
    endItem.classList.remove("end__item_l_disabled");
    endWho.classList.remove("end__item-who_disabled")
};
const endOff = () => {
    endItem.classList.add("end__item_l_disabled");
    endWho.classList.add(".end__item-who_disabled")
};

//main
const main = () => {
    const main = document.querySelector(".main");
    const navBtn = document.querySelectorAll(".menu__nav-btn");
    const itemHeight = document.querySelector(".itemH").clientHeight;

    //scroll animation
    const scrollControl = () => {
        let topA = 0;
        window.addEventListener('scroll', () => {
            topA = pageYOffset;
            console.log(itemHeight);
            //Map
            if (topA < itemHeight) {
                mapOn();
            } else {
                mapOff();
            }
            //History
            if (topA > itemHeight-200 && topA < itemHeight*2) {
                historyOn();
            } else  {
                historyOff()
            }
            //stat
            if (topA > itemHeight*2-200 && topA < itemHeight*3) {
                statOn();
            } else  {
                statOff()
            }
            //Problems
            if (topA > itemHeight*3-200 && topA < itemHeight*4) {
                problemsOn();
            } else  {
                problemsOff()
            }
            //How
            if (topA > itemHeight*4-200 && topA < itemHeight*5) {
                howOn();
            } else  {
                howOff()
            }
            //Sector
            if (topA > itemHeight*5-200 && topA < itemHeight*6) {
                sectorOn()
            } else  {
                sectorOff()
            }
            //End
            if (topA > itemHeight*6-320) {
                endOn()
            } else  {
                endOff()
            }
        });
        if (topA === 0 ) {
            setTimeout(mapOn, 4000);
        }
    };
    scrollControl();

    let opacity = () => {
        main.style.opacity = '0';
        setTimeout(()=> {
            main.style.transition = 'opacity .4s ease-out';
            main.style.opacity = '1';
            setTimeout(()=> {
                main.style.transition = "none";
            }, 200)
        },200);
    };
    //scroll by navigation menu
    for (let i = 0; i < navBtn.length; i++) {
        //to map
        navBtn[i].addEventListener("click", ()=> {
            opacity();
        });
    }
};
main();





