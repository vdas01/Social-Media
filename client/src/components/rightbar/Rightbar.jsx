import React from 'react'
import "./rightbar.scss"

const Rightbar = () => {
  return (
    <div className='rightbar'>
     <div className="container">
         <div className="item">
            <span>Suggestions For You</span>
            <div className="user">
              <div className="userInfo">
                  <img src="" alt="" />
                  <span>Vishal Das</span>
              </div>
              <div className="buttons">
                 <button>Follow</button>
                 <button>Dismiss</button>
              </div>
            </div>

            <div className="user">
            <div className="userInfo">
                <img src="" alt="" />
                <span>Vishal Das</span>
            </div>
            <div className="buttons">
               <button>Follow</button>
               <button>Dismiss</button>
            </div>
          </div>
         </div>

         <div className="item">
           <span>Latest Activities</span>
           <div className="user">
              <div className="userInfo">
               <img src="" alt="" />
               <p>
               <span>Vishal Das </span> changed their cover picture
               </p>
             </div>
             <span>1 min ago</span>
           </div>

           <div className="user">
              <div className="userInfo">
               <img src="" alt="" />
               <p>
               <span>Vishal Das </span> changed their cover picture
               </p>
             </div>
             <span>1 min ago</span>
           </div>

           <div className="user">
              <div className="userInfo">
               <img src="" alt="" />
               <p>
               <span>Vishal Das </span> changed their cover picture
               </p>
             </div>
             <span>1 min ago</span>
           </div>


           <div className="user">
              <div className="userInfo">
               <img src="" alt="" />
               <p>
               <span>Vishal Das </span> changed their cover picture
               </p>
             </div>
             <span>1 min ago</span>
           </div>
         </div>


         <div className="item">
            <span>Online Friends</span>
            <div className="user">
               <div className="userInfo">
                  <img src="" alt="" />
                  <div className="online"></div>
                     <span>Vishal Das</span>                   
               </div>
            </div>

            <div className="user">
               <div className="userInfo">
                  <img src="" alt="" />
                  <div className="online"></div>
                     <span>Vishal Das</span>
                </div>
            </div>

            <div className="user">
               <div className="userInfo">
                  <img src="" alt="" />
                  <div className="online"></div>
                     <span>Vishal Das</span>
                  </div>
            </div>

            <div className="user">
               <div className="userInfo">
                  <img src="" alt="" />
                  <div className="online"></div>
                     <span>Vishal Das</span>
                  </div>
            </div>

            <div className="user">
               <div className="userInfo">
                  <img src="" alt="" />
                  <div className="online"></div>
                     <span>Vishal Das</span>
                </div>
            </div>
         </div>
     </div>
    </div>
  )
}

export default Rightbar