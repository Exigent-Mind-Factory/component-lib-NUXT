<template>
    <section class="projects">
        <div class="topbar disflex-space-between">
            <h4>Projects</h4>
            <div class="search-filter">
                <input v-model="search" placeholder="Search..."/>
                <img src="../assets/icons/icon-search.svg" alt="Search">
            </div>
        </div>
        <div class="list table disflex-space-between disflex-wrap">
            <div class="list-title disflex-space-between">
                <span class="title">Date</span>
                <span class="title">Movie Name</span>
                <span class="title">Director</span>
                <span class="title">Writer</span>
                <span class="title">Predicted Gross</span>
                <span class="title options">Options</span>
            </div>
            <div class="list-wrap" v-for="m in movie" :key="m">
                <div class="list-item disflex-space-between disflex-wrap">
                    <span class="item date"><span class="mobile-label">Date:</span>{{ m.date }}</span>
                    <span class="item movie-name"><span class="mobile-label">Movie Name:</span>{{ m.movieName }}</span>
                    <span class="item director"><span class="mobile-label">Director:</span>{{ m.director }}</span>
                    <span class="item writer"><span class="mobile-label">Writer:</span>{{ m.writer }}</span>
                    <span class="item p-gross"><span class="mobile-label">Prediction Gross:</span>{{ m.predictedGross }}</span>
                    <span class="item options">
                        <a href="#">
                            <img src="../assets/icons/icon-refresh.svg" alt="Rerun">
                            <span class="tooltip">Rerun Prediction</span>
                        </a>
                        <a href="#">
                            <img src="../assets/icons/reports.svg" alt="Reports">
                            <span class="tooltip">View Report</span>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    setup() {
    },
    data() {
        return {
            movie: [
                {date: '12 June 2021', movieName: 'Jurassic Park 5', director: 'Steven Iceburg', writer: 'D Night Mchahon', predictedGross: '$112,900,099'}, 
                {date: '10 June 2001', movieName: 'Jurassic Park 1', director: 'Steven Iceburg', writer: 'Night Mchahon',   predictedGross: '$11,900,099'},
                {date: '12 June 2021', movieName: 'Jurassic 5',      director: 'Steven Iceburg', writer: 'Smith Mchahon',   predictedGross: '$12,900,099'},
                {date: '12 June 2021', movieName: 'Jurassic Park 2', director: 'Steven Iceburg', writer: 'Peter Mark',      predictedGross: '$112,900,099'},
                {date: '12 June 2021', movieName: 'Jurassic Park 5', director: 'Steven Iceburg', writer: 'D Night Mchahon', predictedGross: '$112,900,099'},
                {date: '12 June 2021', movieName: 'Jurassic Park 5', director: 'Steven Iceburg', writer: 'D Night Mchahon', predictedGross: '$112,900,099'},
                {date: '12 June 2021', movieName: 'Jurassic Park 5', director: 'Steven Iceburg', writer: 'D Night Mchahon', predictedGross: '$112,900,099'},
                {date: '12 June 2021', movieName: 'Jurassic Park 5', director: 'Steven Iceburg', writer: 'D Night Mchahon', predictedGross: '$112,900,099'},
                {date: '12 June 2021', movieName: 'Jurassic Park 5', director: 'Steven Iceburg', writer: 'D Night Mchahon', predictedGross: '$112,900,099'},
                {date: '12 June 2021', movieName: 'Jurassic Park 5', director: 'Steven Iceburg', writer: 'D Night Mchahon', predictedGross: '$112,900,099'},
                {date: '12 June 2021', movieName: 'Jurassic Park 5', director: 'Steven Iceburg', writer: 'D Night Mchahon', predictedGross: '$112,900,099'},
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
section.projects{
    padding: 40px;
    .list{
        margin-top: 20px;
        .list-title{
            margin-bottom: 10px;
            display: none;
            @media (min-width: 1440px){
                display: flex;
                align-items: center;
                width: 100%;
                padding: 0 15px;
            }
            span.title{
                color: var(--off-white);
                font-weight: 700;
                width: 16%;
                font-size: .9rem;
            }
            .options{
                @media (min-width: 1440px){
                    text-align: right;
                }
            }
        }
        .list-wrap{
            position: relative;
            -webkit-animation: fade-in-left 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in-left 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            @media (min-width: 576px){
                width: calc(50% - 10px);
                @media (min-width: 1440px){
                    width: 100%;
                }
            }
        }
        .list-item{
            padding: 20px;
            background-color: var(--alternate-color);
            border-radius: 3px;
            margin-bottom: 20px;
            @media (min-width: 1440px){
                padding: 12px 15px;
                align-items: center;
                margin-bottom: 10px;
            }
            .item{
                width: 100%;
                font-size: .8rem;
                color: #fff;
                display: block;
                margin-bottom: 8px;
                @media (min-width: 1440px){
                    width: 16%;
                    margin-bottom: 0;
                }
                &:nth-last-child(1){
                    margin-bottom: 0;
                }
                &.options{
                    text-align: right;
                    width: 100%;
                    margin-top: 20px;
                    @media (min-width: 1440px){
                        width: 16%;
                        margin-top: 0;
                    }
                    img{
                        width: 20px;
                        margin-left: 20px;
                    }
                    a{
                        span.tooltip{
                            position: absolute;
                            background-color: var(--alternate-color);
                            box-shadow: 0 0 10px var(--primary-color-shadow);
                            bottom: 50px;
                            right: 10px;
                            padding: 8px 20px;
                            border-radius: 2px;
                            color: #fff;
                            font-size: .8rem;
                            font-weight: 400;
                            opacity: 0;
                            visibility: hidden;
                            transition: 0.5s;
                            @media (min-width: 1440px){
                                bottom: unset;
                                top: -15px;
                            }
                        }
                        &:hover{
                            span.tooltip{
                                transition: 0.3s;
                                opacity: 1;
                                visibility: visible;
                            }
                        }
                    }
                }
                span.mobile-label{
                    color: var(--off-white);
                    font-weight: 700;
                    font-size: .9rem;
                    @media (min-width: 1440px){
                        display: none;
                    }
                }
            }
        }
    }
    .topbar{
        flex-direction: column;
        @media (min-width: 768px){
            flex-direction: row;
        }
        .search-filter{
            position: relative;
            input{
                background-color: var(--alternate-color);
                color: #fff;
                border-radius: 4px;
                padding: 12px 15px;
                width: calc(100% - 30px);
                border: none;
                outline: none;
                margin-top: 15px;
                @media (min-width: 768px){
                    width: 250px;
                }
                &::placeholder{
                    color: #fff;
                }
            }
            img{
                position: absolute;
                right: 10px;
                top: 23px;
                width: 20px;
            }
        }
    }
}
//Key Frames
@-webkit-keyframes fade-in-left {
  0% {
    -webkit-transform: translateX(-50px);
            transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fade-in-left {
  0% {
    -webkit-transform: translateX(-50px);
            transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
</style>