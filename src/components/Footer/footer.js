import React from "react";
import './footer.css'

const Footer = () =>{
    return(
        <section className="footer">
            <span>Hosted On AWS</span>
            <span> Created By Vincent Do</span>    
            <div className="footer-icons">
                <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_152_248)">
                        <path d="M25.89 30.1766C27.823 30.1766 29.39 28.2179 29.39 25.8016C29.39 23.3854 27.823 21.4266 25.89 21.4266C23.957 21.4266 22.39 23.3854 22.39 25.8016C22.39 28.2179 23.957 30.1766 25.89 30.1766Z" fill="#61DAFB"/>
                        <path d="M25.89 34.5516C39.0068 34.5516 49.64 30.6341 49.64 25.8016C49.64 20.9692 39.0068 17.0516 25.89 17.0516C12.7733 17.0516 2.14001 20.9692 2.14001 25.8016C2.14001 30.6341 12.7733 34.5516 25.89 34.5516Z" stroke="#61DAFB" stroke-width="2"/>
                        <path d="M17.6167 30.3753C24.5259 41.8337 33.8309 49.0749 38.4001 46.549C42.9694 44.0231 41.0725 32.6865 34.1633 21.2281C27.2541 9.76956 17.9491 2.52835 13.3799 5.05428C8.81067 7.58021 10.7076 18.9168 17.6167 30.3753Z" stroke="#61DAFB" stroke-width="2"/>
                        <path d="M17.6167 21.228C10.7076 32.6865 8.81066 44.0231 13.3799 46.549C17.9491 49.0749 27.2542 41.8337 34.1633 30.3753C41.0725 18.9168 42.9694 7.58022 38.4001 5.05428C33.8309 2.52835 24.5259 9.76957 17.6167 21.228Z" stroke="#61DAFB" stroke-width="2"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_152_248">
                            <rect width="50" height="50" fill="white" transform="translate(0.890015 0.801636)"/>
                        </clipPath>
                    </defs>
                </svg>
                <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_152_276)">
                        <path d="M47.9775 0.802124L43.961 45.7969L25.9068 50.8019L7.90226 45.8039L3.89001 0.802124H47.9775Z" fill="#264DE4"/>
                        <path d="M40.5224 42.9315L43.9548 4.48145H25.9337V46.9761L40.5224 42.9315Z" fill="#2965F1"/>
                        <path d="M13.088 21.172L13.5827 26.6912H25.9338V21.172H13.088Z" fill="#EBEBEB"/>
                        <path d="M25.9338 10.0007H25.9147H12.094L12.5957 15.5201H25.9338V10.0007Z" fill="#EBEBEB"/>
                        <path d="M25.9337 41.2484V35.5061L25.9095 35.5125L19.7627 33.8527L19.3697 29.4508H16.3828H13.8292L14.6025 38.1169L25.9083 41.2555L25.9337 41.2484Z" fill="#EBEBEB"/>
                        <path d="M32.7111 26.6911L32.0704 33.8492L25.9147 35.5107V41.2528L37.2295 38.1169L37.3125 37.1845L38.6095 22.654L38.7442 21.1719L39.7406 10.0007H25.9147V15.5201H33.6919L33.1897 21.1719H25.9147V26.6911H32.7111Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_152_276">
                            <rect width="50" height="50" fill="white" transform="translate(0.890015 0.801636)"/>
                        </clipPath>
                    </defs>
                </svg>
                <svg width="51" height="51" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 0.000488281H0V100H100V0.000488281Z" fill="#F7DF1E"/>
                    <path d="M67.1745 78.1259C69.1888 81.4148 71.8094 83.8323 76.4444 83.8323C80.338 83.8323 82.8253 81.8862 82.8253 79.1973C82.8253 75.9751 80.2698 74.8339 75.984 72.9592L73.6348 71.9513C66.8539 69.0624 62.3491 65.4434 62.3491 57.7926C62.3491 50.745 67.719 45.3799 76.111 45.3799C82.0856 45.3799 86.3809 47.4592 89.4761 52.9037L82.1586 57.6021C80.5475 54.7132 78.8094 53.5751 76.111 53.5751C73.3587 53.5751 71.6142 55.3212 71.6142 57.6021C71.6142 60.4212 73.3602 61.5624 77.392 63.3085L79.7412 64.3148C87.7253 67.7386 92.2333 71.2291 92.2333 79.0767C92.2333 87.537 85.5872 92.1719 76.6618 92.1719C67.9348 92.1719 62.2967 88.0132 59.538 82.5624L67.1745 78.1259ZM33.9793 78.9402C35.4555 81.5592 36.7983 83.7735 40.0269 83.7735C43.1142 83.7735 45.0618 82.5656 45.0618 77.8688V45.9164H54.4586V77.9958C54.4586 87.7259 48.7539 92.1545 40.4269 92.1545C32.9031 92.1545 28.546 88.2608 26.3301 83.5712L33.9793 78.9402Z" fill="black"/>
                </svg>
            </div>
            
        </section>

    )
}

export default Footer
