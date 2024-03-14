import landingImage from "../assets/landing.png"
import appDownloadImage from "../assets/appDownload.png"
const HomePage = () => {
  return(
    <div className="flex flex-col gap-12">
        {/* text block -- flex-col  hai islie hamesha h1 and span different column wise hi appear karega .. gap-5{children ke bich y ke along gap} mx-16 mtlb window aur div ke bich x ke along space*/}
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 mx-16">
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                Tuck into a takeaway today
            </h1>
            <span className="text-xl">Food is just a click away!</span>
        </div>


        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage}/>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">Order takeaway even faster</span>
                <span>Download the MernEats App for faster ordering ans personalized recommendation</span>
                <img src={appDownloadImage}/>
            </div>
        </div>
    </div>
  )
}
export default HomePage;