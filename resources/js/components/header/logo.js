import React from "react"
import "./styles.css"

const Logo = () => {
    return (
        <>
            <svg className="logo" width="70" height="70" viewBox="0 0 70 70" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M33.0038 2.30764C32.9436 2.34045 32.878 2.39514 32.8561 2.42795C32.7741 2.54279 32.8124 2.78889 32.9272 2.90373C33.0311 3.00764 33.0749 3.01311 33.9225 2.98029C34.7319 2.94201 36.9413 3.01857 37.4991 3.09514C37.696 3.12248 37.7452 3.11154 37.871 2.98576C38.046 2.80529 38.035 2.59201 37.8436 2.45529C37.7342 2.37873 37.5264 2.34592 36.8702 2.2967C35.7217 2.22014 33.146 2.22561 33.0038 2.30764Z"
                    fill="white"/>
                <path
                    d="M27.8634 2.89834C26.086 3.25381 24.254 3.76241 24.1063 3.94834C23.9751 4.096 23.9806 4.271 24.1173 4.41866C24.2595 4.57178 24.3743 4.56631 24.9048 4.40225C25.5501 4.19444 27.2181 3.77881 28.0985 3.60928C28.9353 3.44522 29.0939 3.36866 29.0939 3.11163C29.0939 2.94756 28.8751 2.72881 28.7165 2.73975C28.6673 2.73975 28.2845 2.81084 27.8634 2.89834Z"
                    fill="white"/>
                <path
                    d="M41.8905 3.07881C41.6827 3.18272 41.628 3.41241 41.7592 3.58741C41.8522 3.71319 41.9944 3.76787 42.7928 3.96475C43.8921 4.23818 44.603 4.446 45.6092 4.78506C46.2491 4.99834 46.3694 5.02568 46.5007 4.971C46.6647 4.90537 46.7358 4.7249 46.6811 4.51709C46.6592 4.42959 46.5663 4.35303 46.3913 4.27647C45.91 4.07412 44.3897 3.60381 43.3397 3.33584C41.978 2.99131 42.0436 3.00225 41.8905 3.07881Z"
                    fill="white"/>
                <path
                    d="M19.0804 5.92243C17.4453 6.75368 16.0507 7.5904 15.9523 7.80368C15.8757 7.97868 15.9906 8.20837 16.1984 8.27946C16.3242 8.32321 16.4499 8.26305 17.232 7.79274C17.7242 7.49196 18.632 6.99431 19.25 6.68259C19.8679 6.3654 20.4148 6.07009 20.4695 6.02634C20.6062 5.90603 20.5898 5.60524 20.4422 5.50134C20.3765 5.45212 20.2672 5.41384 20.207 5.41384C20.1414 5.41384 19.6382 5.64353 19.0804 5.92243Z"
                    fill="white"/>
                <path
                    d="M50.2139 6.15781C50.0717 6.25625 50.0498 6.5625 50.1756 6.68828C50.2194 6.73203 50.5092 6.90703 50.8209 7.07109C51.5865 7.48125 52.5326 8.05547 53.4186 8.64609C53.8178 8.91406 54.2006 9.13281 54.2662 9.13281C54.4084 9.13281 54.6326 8.925 54.6326 8.79375C54.6326 8.61328 54.556 8.52031 54.1459 8.23594C53.0522 7.47031 50.6623 6.07031 50.4436 6.07031C50.3834 6.07031 50.2795 6.10859 50.2139 6.15781Z"
                    fill="white"/>
                <path
                    d="M32.1562 9.95837C28.4484 10.4068 25.2218 12.2552 23.3788 14.9841C23.2038 15.2412 23.0562 15.4599 23.0452 15.4709C23.0343 15.4818 22.7226 15.3888 22.3562 15.2685C19.8187 14.4263 16.9968 14.4701 14.5085 15.3998C11.2984 16.592 9.02336 19.0584 8.36164 22.0662C8.18664 22.8482 8.16477 24.0896 8.30149 24.9154C8.69524 27.2123 9.95852 29.1427 12.064 30.6576C12.6765 31.1006 13.8905 31.7131 14.7273 32.0084L15.3726 32.2381V33.6162C15.3726 34.6662 15.389 34.9998 15.4382 34.9998C15.4765 34.9998 15.5804 34.956 15.6679 34.9013C15.7609 34.8467 20.3109 32.2217 25.7851 29.0662C31.2593 25.9162 35.7984 23.2912 35.8749 23.2365C35.9679 23.1763 36.039 23.0451 36.0882 22.8591C36.1866 22.4654 36.6296 21.5959 36.9741 21.1091C37.3241 20.6115 38.2155 19.6873 38.7679 19.2388C42.1859 16.4881 46.9437 15.6896 48.8359 17.5545C50.8374 19.5177 48.6171 23.4279 44.3241 25.5115C43.389 25.9654 42.6726 26.2279 41.8085 26.4302C40.671 26.6982 39.5827 26.7584 38.6968 26.6052L38.2155 26.5232L34.2452 28.8092C32.0577 30.0724 26.9499 33.0146 22.8866 35.3552C18.8288 37.6904 15.471 39.6318 15.4382 39.6591C15.3835 39.7029 15.3671 41.3381 15.3671 47.3701C15.3671 54.556 15.3726 55.0263 15.4601 54.9935C15.5093 54.9717 16.9585 54.1459 18.6757 53.1615C20.3874 52.1717 25.0796 49.4756 29.0937 47.1677C33.1077 44.8599 36.4163 42.9568 36.4382 42.9295C36.4601 42.9076 36.3452 42.7216 36.1812 42.5193C35.8202 42.0818 35.7984 41.9287 36.028 41.5568C37.1491 39.7959 43.2468 36.3615 45.2484 36.367C45.746 36.367 45.7734 36.4326 45.3468 36.6076C43.5859 37.3568 39.5882 39.6974 38.2155 40.7857C37.6249 41.256 37.6195 41.2724 37.9366 41.6716C38.1937 41.9998 38.2046 42.0052 38.4124 41.9724C39.3913 41.8248 43.9741 39.3365 46.1398 37.7779C46.5062 37.5154 46.6538 37.4443 46.9054 37.406C47.6655 37.2802 47.8187 37.4935 47.4468 38.1279C47.321 38.3412 47.2499 38.3959 46.8288 38.5763C45.0187 39.3529 41.1741 41.6115 39.8015 42.6998C39.3202 43.0881 39.2218 43.2193 39.3312 43.356C39.6757 43.799 39.7905 43.9138 39.9054 43.9138C40.6491 43.9138 45.5109 41.2888 47.7366 39.6865L48.2015 39.3529H48.6499C49.0218 39.3529 49.1257 39.3748 49.2187 39.4568C49.3007 39.5334 49.3226 39.599 49.3007 39.7029C49.2351 39.9545 48.9452 40.4084 48.8195 40.4466C48.5788 40.5177 46.714 41.4529 45.8827 41.9177C43.4273 43.2959 41.2234 44.7506 40.9718 45.1717C40.9062 45.2756 40.928 45.3193 41.1851 45.6146C41.4585 45.9318 41.4804 45.9427 41.6663 45.9099C42.6616 45.724 46.9929 43.3888 49.1421 41.874C49.6671 41.5076 49.7984 41.4365 49.8093 41.5131C49.8859 41.9506 48.6609 43.1263 47.0038 44.2201C44.428 45.9099 41.6445 47.1404 40.403 47.1404C39.9874 47.1404 39.9437 47.1131 39.5226 46.6045L39.3749 46.424L28.596 52.6201C22.6679 56.0326 17.8171 58.8435 17.8171 58.8709C17.8171 58.9474 18.889 59.3904 19.764 59.6802C22.6241 60.6318 26.5562 61.2552 31.1116 61.474C32.6155 61.5451 37.0616 61.5123 38.3085 61.4193C40.4796 61.2552 41.978 61.0857 43.5585 60.8342C48.4476 60.0521 51.8929 58.6248 52.6695 57.0607L52.8007 56.7927L52.8171 45.1443L52.828 33.4959L53.282 33.3427C54.403 32.9545 55.7976 32.1287 56.7655 31.2701C58.7398 29.5146 60.0413 27.0756 60.4624 24.3357C60.5937 23.4717 60.5937 21.8529 60.4624 20.9998C60.1288 18.8341 59.2812 16.8873 57.9796 15.2959C57.5312 14.749 56.607 13.8685 56.071 13.4693C54.5507 12.3373 52.8171 11.6427 51.0124 11.4295C50.1757 11.331 48.6007 11.3857 47.8296 11.5388C46.2765 11.8451 44.614 12.5943 43.4382 13.5131C43.2468 13.6607 43.0773 13.781 43.0499 13.781C43.028 13.781 42.8366 13.606 42.6288 13.3927C40.9554 11.6974 38.4179 10.456 35.7382 10.0295C35.0929 9.92555 32.7851 9.8818 32.1562 9.95837Z"
                    fill="white"/>
                <path
                    d="M11.7523 10.9266C10.7734 11.8016 9.19837 13.4258 9.14916 13.6117C9.09447 13.8305 9.23666 14.0219 9.46634 14.0437C9.65228 14.0601 9.69603 14.0219 10.3906 13.2891C10.7898 12.8625 11.4898 12.1789 11.9437 11.7687C13.0812 10.7351 13.0703 10.7461 13.0703 10.5875C13.0703 10.4016 12.8898 10.2266 12.6984 10.2266C12.5726 10.2266 12.3703 10.3797 11.7523 10.9266Z"
                    fill="white"/>
                <path
                    d="M57.4765 11.3201C57.2414 11.5552 57.3125 11.6755 58.1109 12.4685C58.8109 13.1685 59.757 14.1966 60.3367 14.8857C60.55 15.1373 60.632 15.2029 60.7632 15.2029C60.9656 15.2029 61.1406 15.0279 61.1406 14.831C61.1406 14.5904 59.7843 13.0537 58.3953 11.7138C57.832 11.1724 57.6844 11.1122 57.4765 11.3201Z"
                    fill="white"/>
                <path
                    d="M6.54614 16.9531C6.29457 17.1499 5.14067 19.0859 4.47895 20.4093C4.16723 21.0328 4.13989 21.1148 4.20004 21.2406C4.23286 21.3226 4.32582 21.4101 4.40239 21.4484C4.63754 21.5523 4.7852 21.4374 5.03676 20.9343C5.52348 19.9609 6.23989 18.714 6.84692 17.7789C7.17504 17.2757 7.19145 17.057 6.90707 16.9039C6.74848 16.8218 6.7102 16.8273 6.54614 16.9531Z"
                    fill="white"/>
                <path
                    d="M63.1422 18.2164C62.9398 18.375 62.9562 18.5773 63.2187 19.0039C63.6781 19.7531 64.5476 21.4648 64.9687 22.4492C65.0234 22.5804 65.1328 22.7281 65.2094 22.7773C65.4391 22.9304 65.7344 22.7609 65.7344 22.4765C65.7344 22.0609 63.8641 18.4187 63.5305 18.1836C63.3773 18.0742 63.3172 18.0797 63.1422 18.2164Z"
                    fill="white"/>
                <path
                    d="M2.69615 24.9648C2.4774 25.1179 1.98522 26.8952 1.60787 28.9022C1.4985 29.4765 1.48756 29.6405 1.53678 29.7663C1.65162 30.0343 2.07272 30.0343 2.17662 29.7663C2.20944 29.6788 2.3024 29.2687 2.37897 28.8476C2.54303 27.9616 2.88209 26.5726 3.11725 25.8124C3.21022 25.5171 3.28131 25.2491 3.28131 25.2163C3.28131 25.1179 3.02428 24.8827 2.9149 24.8827C2.86022 24.8827 2.76178 24.921 2.69615 24.9648Z"
                    fill="white"/>
                <path
                    d="M66.6804 26.3591C66.4288 26.463 66.4234 26.5779 66.6312 27.4419C66.8718 28.4591 67.014 29.2138 67.1781 30.3404C67.3203 31.3083 67.3804 31.4451 67.6593 31.4451C67.8179 31.4451 68.0312 31.281 68.0312 31.1552C68.0312 31.1169 67.9929 30.7998 67.9492 30.4552C67.7578 28.9732 67.2492 26.5888 67.096 26.4412C66.9867 26.3373 66.8171 26.3044 66.6804 26.3591Z"
                    fill="white"/>
                <path
                    d="M1.21406 33.8132C1.09922 33.9335 1.09375 33.9937 1.09375 34.8195C1.09375 35.782 1.16484 37.0069 1.28516 38.0351C1.34531 38.5874 1.37813 38.7023 1.47656 38.7843C1.63516 38.9155 1.83203 38.9101 1.96875 38.7733C2.08906 38.653 2.1 38.4944 2.02344 37.953C1.94141 37.3569 1.85938 35.957 1.84297 34.9015C1.83203 33.9171 1.82656 33.8952 1.70078 33.7913C1.53125 33.6546 1.35625 33.6601 1.21406 33.8132Z"
                    fill="white"/>
                <path
                    d="M67.6102 34.2998C67.5118 34.4147 67.4954 34.5514 67.4352 35.8201C67.4024 36.5858 67.3368 37.51 67.2931 37.8709C67.129 39.2326 67.1345 39.1342 67.2602 39.26C67.4024 39.4022 67.654 39.4076 67.7797 39.2709C67.9602 39.074 68.1954 36.7881 68.1954 35.2623C68.1954 34.3819 68.1899 34.349 68.075 34.267C67.9055 34.1467 67.7415 34.1576 67.6102 34.2998Z"
                    fill="white"/>
                <path
                    d="M2.31881 42.6834C2.25318 42.7819 2.24225 42.8748 2.26959 43.0225C2.3735 43.5748 3.28131 46.1287 3.71334 47.0967C3.88287 47.474 4.15631 47.5779 4.37506 47.3592C4.53366 47.2006 4.51178 47.0639 4.26569 46.4787C3.93209 45.7076 3.48366 44.4772 3.19928 43.5584C3.06256 43.11 2.90397 42.6944 2.86022 42.6451C2.7235 42.4975 2.42818 42.5194 2.31881 42.6834Z"
                    fill="white"/>
                <path
                    d="M66.3467 43.077C66.2756 43.1372 66.1335 43.4762 65.9749 43.9684C65.6577 44.9528 65.2913 45.9153 64.8921 46.8286C64.7116 47.2442 64.6022 47.5614 64.6241 47.6216C64.7608 48.0098 65.16 48.0153 65.3514 47.627C65.7506 46.8559 66.9373 43.6512 66.9373 43.3559C66.9373 43.2192 66.7022 42.984 66.5655 42.984C66.5053 42.984 66.4069 43.0278 66.3467 43.077Z"
                    fill="white"/>
                <path
                    d="M5.93906 50.8154C5.88984 50.881 5.85156 50.9904 5.85156 51.0505C5.85156 51.3185 8.09374 54.474 8.59687 54.917C8.80468 55.1029 9.15468 54.9935 9.18749 54.742C9.21484 54.5506 9.17109 54.4631 8.87577 54.1076C8.35078 53.4677 7.4375 52.2263 7.01093 51.5701C6.78125 51.2255 6.55156 50.8865 6.4914 50.8154C6.33828 50.6513 6.05391 50.6513 5.93906 50.8154Z"
                    fill="white"/>
                <path
                    d="M62.6609 51.1325C62.6116 51.1654 62.3109 51.5646 61.9937 52.0239C61.4523 52.806 60.9054 53.5278 60.1179 54.4958C59.746 54.9442 59.7023 55.1083 59.8828 55.2887C60.014 55.42 60.1945 55.4309 60.3585 55.3161C60.6046 55.1411 62.114 53.1942 62.8359 52.1169C63.2187 51.5482 63.2679 51.3458 63.0601 51.1763C62.9179 51.0669 62.803 51.056 62.6609 51.1325Z"
                    fill="white"/>
                <path
                    d="M11.7359 57.5913C11.5226 57.7608 11.5445 57.9905 11.8015 58.2257C12.4523 58.8327 13.6445 59.7897 14.6343 60.5006C15.3398 61.0092 15.5367 61.0749 15.7226 60.8671C15.8703 60.703 15.8429 60.4788 15.6625 60.3366C15.575 60.271 15.0609 59.8827 14.5195 59.4835C13.9781 59.0788 13.2562 58.5046 12.9117 58.2092C12.2609 57.6405 12.0422 57.4764 11.9437 57.4764C11.9109 57.4764 11.8179 57.5257 11.7359 57.5913Z"
                    fill="white"/>
                <path
                    d="M56.875 57.8428C56.8313 57.8647 56.5141 58.1163 56.1641 58.4061C55.4696 58.9913 54.5125 59.7186 53.6867 60.2928C53.1016 60.6921 52.9922 60.8397 53.0906 61.0585C53.1617 61.2171 53.3805 61.321 53.5227 61.2663C53.6977 61.2061 55.3055 60.0631 56.0547 59.4616C56.9789 58.7288 57.3672 58.3514 57.3672 58.2038C57.3672 57.9795 57.0774 57.7663 56.875 57.8428Z"
                    fill="white"/>
                <path
                    d="M19.1516 62.5622C18.993 62.6278 18.911 62.8465 18.9766 63.0325C19.0203 63.1419 19.1899 63.2458 19.7586 63.5192C20.6938 63.9677 21.8258 64.4434 22.7391 64.777L23.4664 65.0396L23.6141 64.9302C23.7727 64.8099 23.8274 64.5966 23.7399 64.4325C23.7071 64.3723 23.4391 64.2411 23.0399 64.0934C22.1375 63.7598 20.8797 63.2348 20.0485 62.8411C19.6602 62.6551 19.3266 62.5075 19.3102 62.5129C19.2938 62.5129 19.2227 62.5348 19.1516 62.5622Z"
                    fill="white"/>
                <path
                    d="M48.9727 62.978C48.0485 63.399 46.8235 63.9022 46.0579 64.1701C45.6586 64.3068 45.2813 64.449 45.2211 64.4818C44.9805 64.6076 45.0024 65.0068 45.2594 65.1217C45.3688 65.1763 45.4782 65.1545 45.8993 65.0178C46.6266 64.7717 48.0594 64.2084 48.929 63.8147C49.886 63.3881 50.0829 63.1912 49.8368 62.9014C49.6673 62.7045 49.547 62.7155 48.9727 62.978Z"
                    fill="white"/>
                <path
                    d="M27.4859 65.5646C27.3546 65.7068 27.3546 65.9365 27.4859 66.0677C27.6992 66.2755 31.4289 66.8278 32.1835 66.7622C32.4406 66.7403 32.5773 66.5599 32.5171 66.3193C32.4679 66.1115 32.3585 66.0732 31.6585 66.0076C30.7398 65.9255 29.8265 65.8052 28.9023 65.6466C27.6718 65.4334 27.6062 65.4279 27.4859 65.5646Z"
                    fill="white"/>
                <path
                    d="M40.8244 65.5756C40.2775 65.6905 38.2869 65.953 37.5705 66.0077C37.133 66.0405 36.6955 66.0788 36.5971 66.0952C36.2471 66.1499 36.1541 66.56 36.4494 66.7514C36.5752 66.8335 36.6682 66.8335 37.3955 66.7788C38.3307 66.7022 39.5502 66.5491 40.5236 66.385C41.251 66.2647 41.4533 66.1608 41.4533 65.9202C41.4533 65.7725 41.3002 65.5866 41.1525 65.5538C41.0924 65.5428 40.9447 65.5483 40.8244 65.5756Z"
                    fill="white"/>
            </svg>
        </>
    )
}

export default Logo