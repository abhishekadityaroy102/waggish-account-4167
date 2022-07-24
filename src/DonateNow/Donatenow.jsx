import { Box, Button, CircularProgress, CircularProgressLabel, FormControl, FormLabel, HStack, Input, InputGroup, InputLeftAddon, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Switch, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Getiddataaction } from '../Redux/Action'
import { GiReceiveMoney } from 'react-icons/gi';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import styles from "../Styles/Donatenow.module.css"
// import { storyabout } from '../Story'
import { payment, qrcode } from '../Data/Image'
import Modalbox from '../Modal/Modal'
const Donatenow = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  const {donatedata}=useSelector((state)=>state)
  const [update,setupdate]=useState(false)
  const [story,setstory]=useState(true)
  const dispatch=useDispatch()
  const {id}=useParams()
  let el=[]
  if(donatedata.length==0){
    el[0]={Total_amount:0,need_amount:5}
  }
  else{
    el=donatedata
  }
  useEffect(()=>{
    Getiddataaction(id,dispatch)
  },[id])
  // console.log("id",id,donatedata)
  console.log("total amoutn",el)
  return (
    <div>
      <div className={styles.flexcard}>
        <div className={styles.cardscroll} >
          {
            donatedata.map((el)=>(<div >
                   <div>
                    <img src={el.avatar}></img>
                   </div>
                   <div>
                   <div >
                     <div className={styles.progress}>
                      <div style={{display:"flex"}}>
                      <div><CircularProgress value={Math.abs(Math.floor((Number(el.     Total_amount)/Number(el.need_amount))*100))} color='green.400'>
                         <CircularProgressLabel>{Math.abs(Math.floor((Number(el.Total_amount)/Number(el.need_amount))*100))>100 ? 100:Math.abs(Math.floor((Number(el.Total_amount)/Number(el.need_amount))*100))}%</CircularProgressLabel>
                        </CircularProgress></div>
                      <div style={{paddingLeft:"15px",marginTop:"-2px"}}>
                      <p>Raised</p>
                         <h2>₹{el.Total_amount} of ₹{el.need_amount} </h2>
                      </div>
                        </div>
                      <div>
                      <a><p>1121 supporters</p></a>
                     </div>
                     </div>
                    
                     <div className={styles.whatsapp}>
                         <div>
                            <button>Whatsapp</button>
                         </div>
                            <div>
                             <button style={{backgroundColor:"blue",color:"white"}}>facebook</button>
                           </div>
                       </div>
                     <div className={styles.createdbox}>
                          <div className={styles.createname}>
                            <div>
                              <img src="https://pngpress.com/wp-content/uploads/2020/09/uploads_letter_k_letter_k_PNG7.png"></img>
                            </div>
                             <div style={{textAlign:"start"}}>
                            <p style={{paddingLeft:"10px"}}>Created by</p> 
                              <h2 style={{paddingLeft:"10px"}}>{el.createdAt}</h2></div>
                            </div>
                         <div className={styles.fundraise}>
                             <div style={{width:"60px"}}>
                              <img src="https://www.jasonsigns.com.au/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/a/l/alpha-blk_s_200mm_asset_id_black.gif"></img>
                             </div>
                              <div style={{textAlign:"end"}}>
                                 <p>This fundraiser will benefit</p>
                                  <h2>Suriya Kiran</h2>
                                  <p>from Bengaluru,Karnataka</p>
                           </div>
                      </div>
                     </div>
                     <div className={styles.storyupdates}>
                      <div onClick={()=>setstory(true)}>Story</div>
                      <div onClick={()=>setstory(false)}>Updates(1)</div>
                     </div>
                      <div className={styles.storypage}>
                        {
                          story ?(<div>
                            <p>This is a submission from a mother of An Adventurous Sunny Boy - Suriya Kiran. S alias Mitheleesh – Mithu, who is silently fighting for his life at Private Hospital – Coimbatore.
Kindly shower prayers and blessings as it is the only a miracle that can work at the present moment to bring him back to life.
</p>
<br></br>

Outwardly, he is intact with only a bruise on his frontal forehead but the entire internal – be it his skull, brain, facial bones, lungs, chest have been damaged. Suriya is under observation for 24-48 hours, after which further treatment will be started. He met with an accident on 19th July @ 5.17am head-on collision at Palakkad. This terrible accident has left him with multiple internal fractures to his skull, face, nose, ribs and chest. Suriya’s saving grace from this becoming fatal was that he always wore complete protective riding gear including helmet, gloves, riding jacket with elbow, shoulder and back guards, knee guards and shoes.
<br></br>
If you look into his Instagram Page you will find him concealed with his uncompromised priceless helmet and his first and only love – “Razor-His Himalayan,” which he got out of his own hard earned money during his second year of college, just by doing part-time job and some contribution from his grandfather. He never rides his bike on long drives without a safety jacket or helmet. He won’t give u a lift if you don’t have a helmet and always has safety first in his mind. Anyone who comes in association with him will end up being great fans and bikers.
<br></br>
<p>As a mother, I brought him up with an iron fist, yet I silently cherished him - his discipline, talent, kindness, the goodness in him – also as a good housekeeper and a cook. He earned his Karate Black Belt. An energetic cadet of NCC. I was always mesmerized his power packed dance. A good mimycrist. A versatile actor. Some never knew, as he was passive and never a show off. Always ready for an adventure.
  </p>
<br></br>
<p>I am prepared to be strong and definitely need your support. We are awaiting for him to regain his consciousness and start responding to the treatment given by the doctors at one of the best Trauma Care Centre – Ganga Hospital, Coimbatore. With your support I know he will emerge out of this.
</p>
<br></br>
<p>The hospital has estimated that an approximate 5-6 lakhs will be needed for Suriya's treatment every week. Given the severity of injuries, they also are unable to estimate the duration of his recovery and treatment at Ganga hospital. Given these circumstances, we are estimating that we will need between 25,00,000-30,00,000 if not more to support his recovery journey including any surgeries that may be needed. 
</p>
<b>Please come forward to support my cause. Any contribution will be of immense help. Do contribute and share this crowdfunding fundraiser link with your friends and family.
</b>
                          </div>):(<div>
                            <p>Dear Supporters,
</p>
<b>Thank you all for your Love and Generous support!
</b>
<br></br>
<br></br>
<p>
To help raise the amount faster for the treatment, Ongoing forward, Milaap will now offer a 8% matching on all the payments (till the funds last)**. For example, for Rs.1000 of a donor's contribution, Milaap will now contribute an additional Rs.80 to the campaign thereby creating 1.08X the impact.
</p>
<br></br>
<br></br>
Also, the fundraiser campaign now has 80G Tax Exemption Benefits for the donors who have so far contributed as well for all the future donors who'd contribute towards the fundraising campaign cause.
<br></br>
<br></br>
Please come forward to help Suriya Kiran undergo the treatment faster and recover soon!! You can help by Clicking on the donate now button:
<br></br>
<br></br>
https://milaap.org/fundraisers/support-suriya-kiran

Please continue supporting and sharing the campaign with your contacts and networks.

<p>Regards,</p>
<b>Team Millap.</b>
</div>)
                        }
                      </div>
                    </div>
                     </div>
                   <div></div>
            </div>))
          }
        </div>
        <div className={styles.donatecard}>
          <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
            <div style={{display:"flex",gap:"10px",fontSize:"20px",padding:"5px"}}>
            <GiReceiveMoney fontSize="35px"/>
            <p>Donate</p>
           </div>
            <div>
              <a><p style={{padding:"5px"}}>1121 Supporters</p></a>
            </div>
          </div>
          <div className={styles.progressdonate}>
            <div><CircularProgress value={Math.abs(Math.floor((Number(el[0].Total_amount)/Number(el[0].need_amount))*100))} color='green.400'size="80px" >
            <CircularProgressLabel>{Math.abs(Math.floor((Number(el[0].Total_amount)/Number(el[0].need_amount))*100))>100 ? 100:Math.abs(Math.floor((Number(el[0].Total_amount)/Number(el[0].need_amount))*100))}%</CircularProgressLabel>
       </CircularProgress></div>
            <div>
              <p>Raised</p>
              <div style={{display:"flex",justifyContent:"space-evenly"}}>
              <h2 style={{color:"brown",fontSize:"18px"}}>Rs. {el[0].Total_amount}</h2> 
              <p>of Rs. {el[0].need_amount}</p>
              </div>
             
            </div>
          </div>
          <div style={{borderLeft:"5px solid brown",backgroundColor:"whitesmoke",padding:"10px",marginBottom:"10px"}}>
            <p style={{textAlign:"start",padding:"5px"}}>Receive <a> tax benefits</a> by donating to this cause.</p>
          </div>
          <div className={styles.donatebutton}>
            <button onClick={onOpen}>Donate now</button>
            <p>Card,Netbanking,Cheque pickups</p>
          </div>
          <div>
            or Donate using
          </div>
          <div>
            <div className={styles.qrimage}><img src={qrcode.imagelink}></img></div>
            <div><p>Scan and donate with any app</p></div>
            <div className={styles.paymentimg}>
              {
                payment.map((el)=><div>
                  <img src={el.imagelink}></img>
                </div>)
              }
            </div>
          </div>
          <div className={styles.warrantylogo}>
            <div >
              <img  src="https://cdn5.vectorstock.com/i/1000x1000/94/64/warranty-3d-silver-badge-with-blue-ribbon-vector-16419464.jpg"></img>
            </div>
            <div>
              <p>Protecting donors with refund for safe and trusted giving</p>
            </div>
          </div>
        </div>
      </div>
      <div>
      <Modalbox el={el[0]} finalRef={finalRef} isOpen={isOpen} onClose={onClose}/>

      {/* <Button mt={4} onClick={onOpen}>
        Open Modal
      </Button> */}
      
  
</div>
      <div>
        footer
      </div>
    </div> 
  )
}

export default Donatenow
