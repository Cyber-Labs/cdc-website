import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './Recruiters.css'

  //   	const useStyles = makeStyles((theme: Theme) =>
		//   createStyles({
		//     root: {
		//       width: '100%',
		//     },
		//     heading: {
		//       fontSize: theme.typography.pxToRem(15),
		//       fontWeight: theme.typography.fontWeightRegular,
		//     },
		//   }),
		// );

export default class Recruiters extends React.Component{


    render(){

		// const classes = useStyles();
        return(
            <div>
            <center>
                <h2 class="dist">Recruiters</h2>
                </center>
            <div>
            <div>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography><center><b>A-D</b></center></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div class="flex1">
            <div>
            <p><h3>A</h3><br/>
                        Aakash Educational Services Ltd.<br />	
                        ACB (India) Ltd. <br />	
                        Accenture	<br />
                        Adani Group	<br />
                        Adhunik Group of Industries<br />
                        Adobe System	<br />
                        Afcons Infrastructure Ltd.	<br />
                        Airtel	<br />
                        Ajim Prem Ji Foundation	Allahabad Bank <br />
                        Amazon India	<br />
                        Ambuja Cements Limited	<br />
                        AMDOCS	<br />
                        Analytics Quotient	<br />
                        Andritz Technologies Pvt. Ltd. <br />
                        ANMSoft Technologies	<br />
                        Arcelor Mittal	<br />
                        Aricent Technologies	<br />
                        Aries	<br />
                        Arista Networks<br />
                        Ashok Leyland	<br />
                        Aspiring Minds	<br />
                        Atlas Copco	<br />
                        Avantha Power & Infra. Ltd.<br />	
                        Avanti Learning<br />
                        Axis Bank	<br />
             </p>
             </div>
             <div>
              <p><h3>B</h3><br/>
                        Bank of Baroda	<br />
                        Baker Hughes	<br />
                        BASF	<br />
                        Beehyv Software Solutions Pvt. Ltd.<br />
                        Berger Paints India Limited	B G India	<br />
                        BGR Mining & Infra Pvt. Ltd.	<br />
                        Bharat Forge Limited	<br />
                        Bhoomika Cables<br />
                        BHP Billiton	<br />
                        BLA Industries Ltd.	Black Diamond Explosive Pvt. Ltd. <br />	
                        BlackNgreen	Bose Corporation<br />
                        Botil Oil Tools	BPCL	<br />
                        Bridgestone	Brilliant Tutorials	Browserstack <br />
                        Burger Paints <br />

                        </p>
             </div>
             <div>
              <p><h3>C</h3><br/>
                        Cairn Energy	<br />
                        Canara Bank	Canon India Pvt. Ltd.	<br />
                        Capgemini India Pvt. Ltd.<br />
                        Capital Via	Caterpillar India Pvt. Ltd. <br />	
                        CDE Asia Ltd.	<br />
                        CGG	CGI Group Inc. <br />
                        CISCO	<br />
                        Coal India Ltd.	Cognizant <br />	
                        Conzerve Systems Pvt Ltd.	<br />
                        Coupon Dunia<br />
                        CSC India Pvt. Ltd.	CSRL <br />	
                        CV Raman School for IIT JEE	<br />
                        </p>
             </div>
             <div>
             <p><h3>D</h3><br/>
                        Dalmia Cement	<br />
                        Damodar Valley Corporation<br />
                        Dart Energy Ltd.	<br />
                        Datacode	<br />
                        dGB Earth Sciences	<br />
                        DGH	DIT Dehradun<br />
                        DRA Minerals	<br />
                        DRDO	<br />

                        </p>

             </div>

            </div>

          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography><center><b>E-H</b></center></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div class="flex1">
            <div>
            <p><h3>E</h3><br/>
                   Electrosteel Casting Ltd.	<br />
                        EMTA Coal Ltd.	<br />
                        Energy Infratech Pvt. Ltd.<br />
                        Ericsson India Global Services Pvt. Ltd.<br />	
                        Essar E&P Ltd.	<br />
                        Essar Steel India Ltd.	<br />
                        Essel Mining & Industries Ltd.	<br />
                        Evalueserve<br />
                        Exide Industries Ltd.<br />	      
             </p>
             </div>
             <div>
              <p><h3>F</h3><br/>
                        FIITJEE	<br />
                        Facebook Inc.<br />	
                        Federal Bank	<br />
                        Flipkart<br />
                        FMC Technologies	<br />
                        Freescale Semiconductor India Pvt. Ltd.<br />	
                        Futures First	<br />
                        FutureSoft	<br />

                        

                        </p>
             </div>
             <div>
              <p><h3>G</h3><br/>
                       
                        GAIL<br />
                        Gammon India Pvt. Ltd.	<br />
                        GEECL	<br />
                        GlobalLogic	GMDC Ltd.<br />	
                        GMMCO Ltd.<br />
                        Golcha	<br />
                        Goldman Sach<br />	
                        Google	<br />
                        GRC India Pvt. Ltd.<br />	
                        GRM Resources<br />
                        Grofers	<br />
                        GSPCL	<br />
     
                        
                        </p>
             </div>
             <div>
             <p><h3>H</h3><br/>
                        
                        Halliburton Offshore Services Inc.<br />	
                        Hansa Management Pvt. Ltd.	<br />
                        Hatch Associates India Pvt. Ltd.<br />
                        HCL	<br />
                        HDFC	<br />
                        Hero MotoCorp Ltd.	<br />
                        Hindalco Industries Ltd.	<br />
                        Hindustan Copper Limited (HCL)<br />
                        Hindustan Zinc Limited (HZL)	<br />
                        HLS Asia Ltd.	<br />
                        HPCL	<br />
                        </p>

             </div>

            </div>
  
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography><center><b>I-L</b></center></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div class="flex1">
            <div>
            <p><h3>I</h3><br/>
                 IBM India Pvt. Ltd.	IDBI Bank<br />
                        Idea	<br />
                        iLine	<br />
                        Indal Technologies<br />	
                        Indiabulls	<br />
                        Indian Oil Corporation Limited<br />
                        Infosys	<br />
                        Innoplexus	<br />
                        ION GX Technology<br />	
                        ITC Infotech India Ltd.	<br />
                        ITC Limited<br />
                        ITD Cementation India Ltd.<br />      
             </p>
             </div>
             <div>
              <p><h3>J</h3><br/>
                        Jaiprakash Associates Ltd.	<br />
                        Jayshree Taxtiles	<br />
                        JCB India Limited	<br />
                        JEE Classes<br />
                        Jindal Steel & Power Ltd.<br />	
                        Jindal Steel & Works Ltd.	<br />
                        Joy Mining Services India Pvt. Ltd	<br />
                        JSL Stainless Ltd.	<br />
                        JSW Steel Ltd.<br />

                        </p>
             </div>
             <div>
              <p><h3>K</h3><br/>
                       Kanbay	<br />
                        Karam Chand Thapar & Bros. Ltd. <br />	
                        Karvy Consultants	<br />
                        Khosla Lab.	<br />
                        Konkola Copper Mines Plc.<br />
                        KMPG	<br />
                        KritiKal Solutions Private Limited <br />	
                        
                        </p>
             </div>
             <div>
             <p><h3>L</h3><br/>
                      L G Soft India Pvt. Ltd.	<br />
                        L&T Construction<br />
                        L&T Ltd.	<br />
                        Look Plex	<br />
                        Lyca India Pvt. Ltd.<br />   
                       
                        </p>

             </div>

            </div>
  
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography><center><b>M-P</b></center></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div class="flex1">
            <div>
            <p><h3>M</h3><br/>
                      Mahindra Comviva	<br />
                        MAQ Software<br />
                        Marico Industries<br />	
                        Maruti Suzuki	<br />
                        Marble Master (Dubai)<br />	
                        mbe Coal & Mineral Technology	<br />
                        McNally Bharat<br />
                        MECL	<br />
                        Mecon Ltd.	<br />
                        Microsoft	<br />
                        Mitrajaya Group	MMG/HUTCH<br />
                        M. N. Dastur & Company	<br />
                        Monet Ispat & Energy Ltd.	<br />
                        Marble Master (Dubai)	<br />
                        Mphasis Ltd.	<br />
                        Mu-Sigma<br />  
             </p>
             </div>
             <div>
              <p><h3>N</h3><br/>
                     NCCBM	<br />
                    Nestle India<br />	
                    Neyveli Lignite Corporation Ltd. <br />	
                    Niko	<br />
                    NMDC<br />
                    NORMAT	<br />
                    NTPC	<br />
                    Nucleus Software <br />	    

                        </p>
             </div>
             <div>
              <p><h3>O</h3><br/>
                     Odessa Technologies Inc.	<br />
                        Oil India Ltd<br />
                        One 97 Communication<br />	
                        ONGC	<br />
                        OPAL India	<br />
                        Oracle	<br />
                        Orica Mining Services<br />
 
                        </p>
             </div>
             <div>
             <p><h3>P</h3><br/>
                        Pandit Deendayal Petroleum University	<br />
                        Patna Saheb Engg. College	<br />
                        Patni Computer	<br />
                        Paytm	<br />
                        PointCross<br />
                        Polaris	<br />
                        Poncho Hospitality Pvt. Ltd.<br />		
                        Pricewaterhousecoopers	<br />
                        Prism Cement Ltd.<br /> 
                       
                        </p>

             </div>

            </div>
  
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography><center><b>R-Z</b></center></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div class="flex1">
            <div>
            <p><h3>R</h3><br/>
                      Rao Edusolutions Pvt. Ltd.	<br />
                        Reliance Industries Ltd.	<br />
                        Reliance Infrastructure Ltd.	<br />
                        Reliance Power Ltd.	<br />
                        Resonance<br />
                        Rio Tinto	<br />
                        Rockstar India Ltd.	<br /> 
             </p>
             </div>
             <div>
              <p><h3>S</h3><br/>
                        SAIL	<br />
                        Salva Resources<br />	
                        Samsung R&D India Banglalore<br />
                        Samsung R&D India Noida	Sandvik Asia Ltd. <br />	
                        Sapient	<br />
                        Satyam Computer <br />	
                        Schlumberger<br />
                        SEECL	<br />
                        Seekers Educational Services Pvt. Ltd.<br />	
                        SEEPCO & SGORL	<br />
                        Sesa Goa	<br />
                        S. G. Minerals Ltd.<br />
                        Shalina Resources	<br />
                        Shell India	Singareni Collieries Company Ltd.<br />	
                        S&P Capital	<br />
                        S. N. Mohanty Group of Industries<br />
                        Sokrati	South West Mining Ltd.	<br />
                        SPML Infrastructure Ltd.	<br />
                        SPMS Supplies Pvt. Ltd.	<br />
                        S. R. Engineering College<br />
                        S&T Mining Co. Pvt. Ltd.	<br />
                        State Water Inv. Dep., Kolkata	<br />
                        Steel Mont Pvt. Ltd.	<br />
                        Sterlite Industries(Vedanta)<br />	
                        Sterlite Technologies Ltd.<br />
                        Syberplace E-solution Pvt. Ltd.	<br />
                        Systango	<br />


                        </p>
             </div>
             <div>
              <p><h3>T</h3><br/>
                       TAFE Tractor	<br />
                        Tagore Engg. College, Jaipur <br />	
                        Tata Cummins<br />
                        Tata Hitachi	<br />
                        Tata Motors	Tata Project Limited	<br />
                        Tata Steel	<br />
                        TCE Consulting Engineers Ltd.<br />
                        TCS	TechMahindra	<br />
                        Tega Industries Ltd	<br />
                        TELCON	<br />
                        Telibees Technologies Pvt. Ltd.<br />
                        Terex India Pvt. Ltd.	<br />
                        Texas Instruments	<br />
                        TIME	<br />
                        TISCO	<br />
                        TM International Logistics Ltd.<br />
                        TPC	Tractor India Pvt. Ltd.	<br />
                        Trivium Education Services (P) Ltd.<br />	
                        TVS Motors	<br />
                        
                        </p>
             </div>
             <div>
             <p><h3>U</h3><br/>
                       UCIL<br />
                        United Spirits Limited<br />  
                       
                        </p>
              <p><h3>V</h3><br/>
                        Vedanta	<br />
                        Virtusa	<br />
                        Visa Steel Limited	<br />
                        VVIT<br />
              </p>
              <p><h3>W</h3><br/>
               Walmart Labs	<br />
                        Weatherford	<br />
                        Weir Minerals India Pvt. Ltd.<br />	
                        Whizdom Educare Pvt. Ltd.	<br />
                        Wipro<br />
                        </p>
                        
              <p><h3>Y</h3><br/>
              Yahoo! Software Development Pvt. Ltd.
              </p>
              <p><h3>Z</h3><br/>
              Zuari Cement<br />	
                        Zomato Media Pvt. Ltd. <br />
             
              </p>


             </div>

            </div>
  
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
    </div>


            </div>
                
            
            </div>
        );
    }
}