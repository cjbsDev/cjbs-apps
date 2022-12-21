import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// web.cjs is required for IE11 support
import { useSpring, animated } from 'react-spring';
import { styled } from '@mui/system';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import RadioBoxList from '@src/components/radiobox/RadioBoxList';
import MyIcon from '@public/fonts/icon';
import SelectAutoWidth from '@src/components/select/SelectAutoWidth';
import CheckIcon from '@mui/icons-material/Check';
import { Alert, AlertTitle, fabClasses, Grid, setRef, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { SelectChangeEvent } from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { phone, removeHypen } from '@src/util/Format';
import { isEmail } from '@src/util/Valid';
import { GET, POST } from '@src/hooks/api/useAPI';
import { useTranslation } from 'next-i18next';

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {}
  onExited?: () => {}
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  limit:10
});

const FieldSize = '269px'

const ModalContents = styled(Box)`
  width: 1200px;
  height: 94%;
  overflow-y: auto;
  padding: 30px 40px 40px 40px;
  margin-bottom: 52px;
`

const Wrapper = styled(Box)`
  width: 1200px;
  height: 85%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: white;
`

const Section = styled(Box)`
  margin-top: 20px;
  padding-top: 20px;
`
const FlexBox = styled(Box)`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
`

const Title = styled(Typography)`
  height: 24px;
  font-family: CJ ONLY ONE NEW title;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.3px;
  text-align: left;
`
const ResearchTitle = styled(Typography)`
  height: 24px;
  font-family: CJ ONLY ONE NEW title;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.3px;
  text-align: left;
  font-size: 26px;
  font-weight:700;
  margin-bottom:15px;
`

const RequireText = styled(Typography)`
  height: 22px;
  font-family: CJ ONLY ONE NEW body;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.3px;
  text-align: left;
  color: #f44336;
  margin-left: 4px;
`
const InputText = styled(TextField)`
  height: 42px;
  width: 269px;
  margin-right: 12px;
  /* border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.23); */
`
const InputTextAutoCompleate = styled(Autocomplete)`
  height: 42px;
  width: '269px'; 
  margin-right: 12px;
  /* border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.23); */
`
const PlusButton = styled(Button)`
  height: 50px;
  width: 10px;
  padding: 8px;
  border: 1px solid lightgray;
  border-radius: 5px;
`
const ConfirmBox = styled(Box)`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  background-color: #006ecd;
  width: 100%;
`
const ConfirmButton = styled(LoadingButton)`
  height: 28px;
  font-family: CJ ONLY ONE NEW body;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.5px;
  text-align: left;
  color: white;
  width: 100%;
`
const FlextBoxBotBorder = styled(FlexBox)`
  margin-bottom:17px;
  margin-top:10px;
  width:85%;
`

const BottomBorder = styled(Box)`
  margin-bottom:30px;
  margin-top:0px;
  width:100%;
  border-bottom: 1px solid #868e95;
  opacity: 0.5;
`

const FlexBoxTitle = styled(FlexBox)`
  margin-bottom:8px;
`
const SelectBoxStyle = {width:FieldSize, height:'35px', margin:'12px 12px 12px 0px'}

const validationInit = {
  division : false,      divisionMsg : '',
  divisionDetail : false, divisionDetailMsg : '',
  diease : false,         dieaseMsg : '',
  dieaseTarget : false,   dieaseTargetMsg : '',
  designCode   : false,   designCodeMsg : '',
  refId        : false,   refIdMsg : '',
  tag          : false,   tagMsg : '',
  researchCode : false,   researchCodeMsg : '',
  researchName : false,   researchNameMsg : '',
  researchDesc : false,   researchDescMsg : '',
  startDate : false,      startDateMsg : '',
  endDate : false,        endDateMsg : '',
  targetNumber : false,   targetNumberMsg : '',
  sampleNumber : false,   sampleNumberMsg : '',
  institute : false,      instituteMsg : '',
  address : false,        addressMsg : '',
  addressDetail : false,  addressDetailMsg : '',
  chief : false,          chiefMsg : '',
  tel : false,            telMsg : '',
  email : false,          emailMsg : ''
}

export interface OpenProps {
  open: boolean,
  code: string
}

export interface ViewDataProps {
  
}

export interface SubjectSelectBoxProps {
  open                 : OpenProps,
  closeModal           : () => void,
  successBarHandleOpen : () => void,
  reloadData?          : () => void,
  viewData             : any,
}

/**
 * 
 * @param open 모달을 오픈할때 사용하고 상세보기 시 studyCode 를 같이 넘겨줘야한다.
 * @param viewData 조회 API => GET(`/study/${code}`)  결과
 * @param closeModal 모달을 닫을 때 사용
 * @param successBarHandleOpen 등록이나 수정을 성공했을 때 스낵바, <EzmxSnackBar> 사용했다.
 * @param reloadData 데이터를 새로불러오는 펑션, 필수아님
 * @returns 
 */
export default function CrisWriteModal({open, viewData, closeModal, successBarHandleOpen, reloadData} : SubjectSelectBoxProps) {
  
  const { t } = useTranslation('research')

  const studyTypes = [
    { label: t('typeCollaboration'), value: "COL" },
    { label: t('typePublic'), value: "PUL" },
  ];

  //Postcode
  const openPostcode = useDaumPostcodePopup();
  //Select
  const [ divisionList, setDivisionList ] = React.useState([])
  const [ divisionDetailList, setDivisionDetailList ] = React.useState([])
  const [ dieaseList, setDieaseList ] = React.useState([])
  const [ designCodeList, setDesignCodeList ] = React.useState([])

  //Selected value
  const [ division, setDivision ] = React.useState('')
  const [ divisionDetail, setDivisionDetail ] = React.useState('')
  const [ diease, setDiease] = React.useState('')
  const [ dieaseTarget, setDieaseTarget ] = React.useState('')
  const [ designCode, setDesignCode ] = React.useState('')
  const [ refId, setRefId ] = React.useState('')
  const [ tag, setTag ] = React.useState('')
  //Autocompleate input value
  const [ institute, setInstitute ] = React.useState('')
  //Autocompleate input value list
  const [ instituteList, setInstituteList ] = React.useState([])
  const [ researcherList, setResearcherList ] = React.useState([])
  //address
  const [ selectAddressIndex, setSelectAddressIndex] = React.useState({type:1, index:0, open:false})
  const [ address, setAddress ] = React.useState("")
  const [ addressDetail, setAddressDetail ] = React.useState("")
  //researcher
  const [ researchers, setResearchers ] = React.useState([{
    name: '', tel: '', email: ''
  }])
  //
  const [ studyType, setStudyType ] = React.useState(studyTypes[0].value)
  //Research Info
  const [ researchName, setResearchName ] = React.useState('')
  const [ researchCode, setResearchCode ] = React.useState('')
  const [ startDate, setStartDate ] = React.useState("")
  const [ endDate, setEndDate ] = React.useState("")
  const [ targetNumber, setTargetNumber ] = React.useState('')
  const [ sampleNumber, setSampleNumber ] = React.useState('')
  const [ researchDesc, setResearchDesc ] = React.useState('')
  //Institute
  const [ chief, setChief ] = React.useState('')
  const [ tel, setTel ] = React.useState('')
  const [ email, setEmail ] = React.useState('')

  const [ loading, setLoading ] = React.useState(false)

  //researcher (optional)
  const [ joinInstitute, setJoinInstitute ] = React.useState([])
  const [ joinInstituteResearchers, setJoinInstituteResearchers ] = React.useState([[]])
   
  //validation
  const [ validation, setValidation ] = React.useState(validationInit)
  const getDesginCode = async () => {
      return await GET(`/study/design`)
  }
 
  const getDivision = async () => {
    return await GET(`/study/division`)
  }

  const getDivisionDetaiList = async (division) => {
    const res =  await GET(`/study/phase/${division}`)
    
    res.status === 200 && res.data.success && setDivisionDetailList(res.data.data.phase)
  }

  const getDieaseList = async () => {
    return await GET(`/study/diagnosisType`)
  }

  const getInstitute = async () => {
    return await GET(`/institute/list`)
  }

  const initData =  async () => {

    const designCodeRes = await getDesginCode()
    const divisionRes = await getDivision()
    const dieaseRes = await getDieaseList()
    const institueRes = await getInstitute()
    
    //아래 조건에 맞으면 데이터 셋
    designCodeRes.status === 200 && designCodeRes.data.success && setDesignCodeList(designCodeRes.data.data)
    divisionRes.status === 200 && divisionRes.data.success && setDivisionList(divisionRes.data.data.division)
    dieaseRes.status === 200 && dieaseRes.data.success && setDieaseList(dieaseRes.data.data.diagnosisType)
    institueRes.status === 200 && institueRes.data.success && setInstituteList(institueRes.data.data)
  }

  const clear = () => {
    setValidation({...validationInit})
    setDivision('')
    setDivisionDetail('')
    setDiease('')
    setDieaseTarget('')
    setDesignCode('')
    setRefId('')
    setTag('')
    setInstitute('')
    setInstituteList([])
    setResearcherList([])
    setSelectAddressIndex({type:1, index:0, open:false})
    setAddress("")
    setAddressDetail("")
    setResearchers([{name: '', tel: '', email: ''}])
    setStudyType(studyTypes[0].value)
    setResearchName('')
    setResearchCode('')
    setStartDate('')
    setEndDate('')
    setTargetNumber('')
    setSampleNumber('')
    setResearchDesc('')
    setChief('')
    setTel('')
    setEmail('')
    setJoinInstitute([])
    setJoinInstituteResearchers(null)
  }

  React.useEffect(()=> {
    initData()
  }, [])

  React.useEffect(()=> {

    getViewData()
    //return () => clear()
  }, [open.code])

  const getViewData = async () => {
    
    if(open.code) {
      
        const data = viewData
        const main = data.main
        const mainInstitute = main.institute
        const mainInvestigator = main.investigator
        const mainSubInvestigators = main.subInvestigators
        const sub  = data.sub

        setStudyType(data.studyType)
        setStartDate(data.startDate)
        setEndDate(data.endDate)
        setDivision(data.division)
        setDiease(data.diagnosisType)
        setDieaseTarget(data.diagnosis)
        setResearchCode(data.studyCode)
        setResearchDesc(data.description)
        setTargetNumber(data.targetSubjectCnt)
        setSampleNumber(data.targetSampleCnt)
        setResearchName(data.title)

        setInstitute(mainInstitute.name)
        setAddress(mainInstitute.addr)
        setAddressDetail(mainInstitute.addrDetail)

        setTel(mainInvestigator.tel)
        setEmail(mainInvestigator.email)
        setChief(mainInvestigator.name)
        console.log("data.divisionDetail   =>>>>>", data.divisionDetail);
        
        data.divisionDetail && setDivisionDetail(data.divisionDetail)
        data.designCode && setDesignCode(data.designCode)
        data.studyTag &&  setTag(data.studyTag)
        data.studyRefId &&  setRefId(data.studyRefId)

    const mainSubResearchers = mainSubInvestigators.map(researcher => {
      return {
        "email": researcher.email,
        "name": researcher.name,
        "tel": researcher.tel
      }
    })
        //필수정보들
    setResearchers(mainSubResearchers)
    //아래는 선택정보들
    const joinInstituteArray = new Array()
    const subInvestigatorsArray = new Array()
    sub.map((item) => {
      const institute = item.institute
      const investigator = item.investigator
      const subInvestigators = item.subInvestigators
  
      const joinInstitute =  {
        institute:institute.name, 
        address:institute.addr, 
        addressDetail:institute.addrDetail,
        name: investigator.name,
        email: investigator.email,
        tel: investigator.tel,
      }
      joinInstituteArray.push(joinInstitute)
  
      const subInfo = subInvestigators.map((item) => {
        return {
          name:item.name,
          tel:item.tel,
          email:item.email
        }
      })
      subInvestigatorsArray.push(subInfo)
      
    })

        setJoinInstitute(joinInstituteArray)
        setJoinInstituteResearchers(subInvestigatorsArray)
    }
  }

  React.useEffect(()=> {

    open.open === false && clear()

  }, [open.open])

  React.useEffect(() => {
    division.length > 0 && getDivisionDetaiList(division)
  }, [division])
  
  React.useEffect(() => {
    
  }, [selectAddressIndex])

  const studyTypeHandleChange = (event: SelectChangeEvent) => {
    setStudyType(event.target.value);
  }
  const divisionHandleChange = (event: SelectChangeEvent) => {
    setDivision(event.target.value);
  }
  const divisionDetailHandleChange = (event: SelectChangeEvent) => {
    setDivisionDetail(event.target.value);
  }
  const dieaseHandleChange = (event: SelectChangeEvent) => {
    setDiease(event.target.value);
  }
  const designCodeHandleChange = (event: SelectChangeEvent) => {
    setDesignCode(event.target.value);
  }
  const tagHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTag(event.target.value);
  }
  const refIdHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRefId(event.target.value);
  }
  const dieaseTargetHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDieaseTarget(event.target.value);
  }
  const researchCodeHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResearchCode(event.target.value);
  }
  const researchNameHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResearchName(event.target.value);
  }
  const startDateHandleChange = (newValue) => {
    setStartDate(newValue.format('YYYYMMDD'))
  }
  const endDateHandleChange = (newValue) => {
    setEndDate(newValue.format('YYYYMMDD'))
  }
  const targetNumberHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTargetNumber(event.target.value);
  }
  const sampleNumberHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSampleNumber(event.target.value);
  }
  const researchDescHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResearchDesc(event.target.value);
  }
  const instituteHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInstitute(event.target.value);
  }
  const addressHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  }
  const addressDetailHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  }
  const chiefHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChief(event.target.value);
  }
  const telHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTel(event.target.value);
  }
  const emailHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
  //연구 담당자 ({t('optional')})
  const researcherHandleChange = (i, type, value) => {
    let researchInfo = researchers[i]
    let updateInfo = null
    switch(type) {
      case 'name' :
        updateInfo = { ...researchInfo, name : value}
        break;
      case 'tel' :
        updateInfo = { ...researchInfo, tel : value}
        break;
      case 'email' :
        updateInfo = { ...researchInfo, email : value}
        break;
    }
    let newResearcher = researchers
    newResearcher[i] = updateInfo
    setResearchers([...newResearcher])
  }
  
  //참여기관  ({t('optional')})
  const joinInstituteHandleChange = (i, type, value) => {
    
    let newJoinInstituteInfo = joinInstitute
    let joinInstituteInfo = newJoinInstituteInfo[i]
    let updateInfo = null
    switch(type) {
      case 'institute' :
        updateInfo = { ...joinInstituteInfo, institute : value}
        newJoinInstituteInfo[i] = updateInfo
        setJoinInstitute([...newJoinInstituteInfo])
        break;
      case 'address' :
        updateInfo = { ...joinInstituteInfo, address : value}
        newJoinInstituteInfo[i] = updateInfo
        setJoinInstitute([...newJoinInstituteInfo])
        break;
      case 'addressDetail' :
        updateInfo = { ...joinInstituteInfo, addressDetail : value}
        newJoinInstituteInfo[i] = updateInfo
        setJoinInstitute([...newJoinInstituteInfo])
        break;
      case 'name' :
        updateInfo = { ...joinInstituteInfo, name : value}
        newJoinInstituteInfo[i] = updateInfo
        setJoinInstitute([...newJoinInstituteInfo])
        break;
      case 'tel' :
        updateInfo = { ...joinInstituteInfo, tel : value}
        newJoinInstituteInfo[i] = updateInfo
        setJoinInstitute([...newJoinInstituteInfo])
        break;
      case 'email' :
        updateInfo = { ...joinInstituteInfo, email : value}
        newJoinInstituteInfo[i] = updateInfo
        setJoinInstitute([...newJoinInstituteInfo])
        break;
    }
  }

    //참여기관 연구 담당자 ({t('optional')})
    const joinInstituteResearcherHandleChange = (parentIndex, index, type, value) => {
      let researchInfo = joinInstituteResearchers[parentIndex]
      let researcherInfo = researchInfo[index]
      console.log("#### researcherInfo ", researcherInfo);
      
      let updateInfo = null
      switch(type) {
        case 'name' :
          updateInfo = { ...researcherInfo, name : value}
          break;
        case 'tel' :
          updateInfo = { ...researcherInfo, tel : value}
          break;
        case 'email' :
          updateInfo = { ...researcherInfo, email : value}
          break;
      }

      researchInfo[index] = updateInfo
      joinInstituteResearchers[parentIndex] = researchInfo
      setJoinInstituteResearchers([...joinInstituteResearchers])
    }
  
  const researcherAdd = () => {
    let researcherArray = researchers
    const researchInfo = {name: '', tel: '', email:''}
    researcherArray.push(researchInfo)
    console.log("researcherArray >", researcherArray);
    setResearchers(new Array(...researcherArray))
  }

  const joinInstitueteAddResearcherAdd = (index) => {
    
    let tempArray = joinInstituteResearchers
    let joinInstituteResearchersArray = tempArray[index]
    
    const joinInstituteResearcherInfo = {name: '', tel: '', email: ''}
    joinInstituteResearchersArray.push(joinInstituteResearcherInfo)
    tempArray[index] = joinInstituteResearchersArray
    
    setJoinInstituteResearchers([...tempArray])
  }
  
  //참여기관 추가
  const joinInstitueteAdd = () => {
    
    //참여기관 추가
    let joinInstituteArray = joinInstitute
    const institueteInfo = {institue:'', address:'', addressDetail: '', name: '', tel: '', email: ''}
    joinInstituteArray.push(institueteInfo)

    setJoinInstitute(new Array(...joinInstituteArray))

    //참여기관 추가됨에 따라 참여 연구자 필드도 추가한다.
    let tempArray = null
    const joinInstituteResearcherInfo = {name: '', tel: '', email: ''}
    if(joinInstituteResearchers){ 
      tempArray = [...joinInstituteResearchers]
    }
    else {
      tempArray = new Array()
    }
    
    tempArray.push([joinInstituteResearcherInfo])
    setJoinInstituteResearchers(new Array(...tempArray))
  }

  const postcodeHandleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    //0 이면 책임기관 주소
    selectAddressIndex.type === 0 && setAddress(fullAddress)
    //1 이면 참여기관 주소
    selectAddressIndex.type === 1 && joinInstituteHandleChange(selectAddressIndex.index, 'address', fullAddress)
  }

  const onClickAddress = (type, index) => {
    console.log("type", type);
    console.log("index", index);
    setSelectAddressIndex({type, index, open:true})
  }

  React.useEffect(() => {
    selectAddressIndex.open && openPostcode({ onComplete: postcodeHandleComplete});
  }, [selectAddressIndex])

  const checkDuplicatedEmail = () => {

  }

  const submit = async () => {
    
    console.log("submit => !!!", divisionDetail);
  //  setLoading(true)
    let check = validation
    let isOnce = false // TODO 개선해야함
    console.log("isNull(division)", isNull(division));
    

    if(isNull(division)){
      isOnce = true
      check.division = true
      check.divisionMsg = t('required')
    }
    else {
      check.division = false
    }

    if(divisionDetailList.length > 0 && isNull(divisionDetail)){
      isOnce = true
      check.divisionDetail = true
      check.divisionDetailMsg = t('required')
    }
    else {
      check.divisionDetail = false
    }

    if(isNull(diease)){
      isOnce = true
      check.diease = true
      check.dieaseMsg =  t('required')
    }
    else {
      check.diease = false
    }
    if(isNull(dieaseTarget)){
      isOnce = true
      check.dieaseTarget = true
      check.dieaseTargetMsg =  t('required')
    }
    else {
      check.dieaseTarget = false
    }
    if(studyType === "PUL"){
      if(isNull(designCode)){
        isOnce = true
        check.designCode = true
        check.designCodeMsg =  t('required')
      }
      else {
        check.designCode = false
      }
      if(isNull(refId)){
        isOnce = true
        check.refId = true
        check.refIdMsg =  t('required')
      }
      else {
        check.refId = false
      }
      if(isNull(tag)){
        isOnce = true
        check.tag = true
        check.tagMsg =  t('required')
      }
      else {
        check.tag = false
      }
    }

    if(isNull(researchCode)){
      isOnce = true
      check.researchCode = true
      check.researchCodeMsg =  t('required')
    }
    else {
      check.researchCode = false
    }
    if(isNull(researchName)){
      isOnce = true
      check.researchName = true
      check.researchNameMsg =  t('required')
    }
    else {
      check.researchName = false
    }
    if(isNull(startDate)){
      isOnce = true
      check.startDate = true
      check.startDateMsg =  t('required')
    }
    else {
      check.startDate = false
    }
    if(isNull(endDate)){
      isOnce = true
      check.endDate = true
      check.endDateMsg =  t('required')
    }
    else {
      check.endDate = false
    }
    if(isNull(targetNumber)){
      isOnce = true
      check.targetNumber = true
      check.targetNumberMsg =  t('required')
    }
    else {
      check.targetNumber = false
    }
    if(isNull(sampleNumber)){
      isOnce = true
      check.sampleNumber = true
      check.sampleNumberMsg =  t('required')
    }
    else {
      check.sampleNumber = false
    }
    if(isNull(researchDesc)){
      isOnce = true
      check.researchDesc = true
      check.researchDescMsg =  t('required')
    }
    else {
      check.researchDesc = false
    }
    if(isNull(institute)){
      isOnce = true
      check.institute = true
      check.instituteMsg =  t('required')
    }
    else {
      check.institute = false
    }
    if(isNull(address)){
      isOnce = true
      check.address = true
      check.addressMsg =  t('required')
    }
    else {
      check.address = false
    }
    if(isNull(addressDetail)){
      isOnce = true
      check.addressDetail = true
      check.addressDetailMsg =  t('required')
    }
    else {
      check.addressDetail = false
    }
    if(isNull(chief)){
      isOnce = true
      check.chief = true
      check.chiefMsg =  t('required')
    }
    else {
      check.chief = false
    }
    if(isNull(tel)){
      isOnce = true
      check.tel = true
      check.telMsg =  t('required')
    }
    else {
      check.tel = false
    }
    if(isNull(email)){
      isOnce = true
      check.email = true
      check.emailMsg =  t('required')
    }
    else {
      check.email = false
    }
    if(!isEmail(email)){
      isOnce = true
      check.email = true
      check.emailMsg =  t('Email is invalid')
    }
    else {
      check.email = false
    }


    if(isOnce){
      console.log("##### IS ONCE");
      
      setValidation({...check})
      setLoading(false)
    }
    else {

      const data = {
        "description": researchDesc,
        "diagnosis": dieaseTarget,
        "diagnosisType": diease,
        "division": division,
        "endDate": endDate,
        "main": {
          "institute": {
            "addr": address,
            "addrDetail": addressDetail,
            "name": institute
          },
          "investigator": {
            "department": null,
            "email": email,
            "name": chief,
            "tel": removeHypen(tel)
          },
          "subInvestigators": 
            researchers.filter(researcher => {
              if(!researcher.email && !researcher.name && !researcher.tel){
                return false
              }
              else {
                return {
                  "department": null,
                  "email": researcher.email,
                  "name": researcher.name,
                  "tel": researcher.tel ? removeHypen(researcher.tel) : ""
                }
              }
            })
        },
        "studyTag": studyType === "PUL" ? tag : null,
        "designCode": studyType === "PUL" ? designCode : null,
        "studyRefId": studyType === "PUL" ? refId : null,
        "phase": "1상",
        "startDate": startDate,
        "studyCode": researchCode,
        "studyType": studyType,
        "sub": 
        joinInstitute.filter((join) => {
          
          if(join.institute && join.address && join.addressDetail && join.tel && join.name && join.email){
              return true
            }
          else {
            return false
          }
        }).map((join, index) => {
          return {
            "institute": {
              "addr": join.address,
              "addrDetail": join.addressDetail,
              "name": join.institute
            },
            "investigator": {
              "department": null,
              "email": join.email,
              "name": join.name,
              "tel": join.tel ? removeHypen(join.tel) : ""
            },
            "subInvestigators": 
            joinInstituteResearchers[index].filter(research => {
              if(!research.email && !research.name && !research.tel){
                return false
              }
              else {
                return true
              }
            }).map((research) => {
              return {
                "department": null,
                "email": research.email,
                "name": research.name,
                "tel": research.tel ? removeHypen(research.tel) : ""
              }
            })
          }
        } ),
        "targetSampleCnt": sampleNumber,
        "targetSubjectCnt": targetNumber,
        "title": researchName
      }
      console.log("저장 DATA =>", data);

      const API = open.code ? `/study/update` : `/study/input`
      
      const res = await POST(API, data)
      
      if(res.status===200 && res.data.success) {
        reloadData()
        successBarHandleOpen()
        closeModal()
      }
      else if(res.status===200 && !res.data.success) {
        alert(res.data.data)
        return
      }
      else {
        console.log("알수없는 에러", res.data.data);
      }
      setLoading(false)
    }
  }

  const isNull = (str) => {
    
    if(str === null || (typeof str == "string" && str.trim() === "")){
      return true 
    }
    else {
      return false
    }
  }
  
  console.log("####!!@!@!@ divisionDetailList >", divisionDetailList);
  
  return (
    <Box>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open.open}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open.open}>
          <Wrapper>
          <Box sx={{position:'absolute', right:20, zIndex:1, top:20}}>
            <Button onClick={closeModal}><MyIcon icon={'x'} size={23} color={'#000000'}/></Button>
          </Box>
          <ModalContents>
            <Box>
              <Section sx={{paddingTop:'0px', marginTop:'0px'}}>
                <Box sx={{justifyContent:'space-between', display:'flex', marginBottom:'15px'}}>
                  {
                    open.code ? 
                    <ResearchTitle>{studyTypes.filter((type) => type.value===studyType)[0].label}</ResearchTitle>
                    :
                    <RadioBoxList
                      defaultValue={'COL'}
                      groupLabel={'studyTypes'}
                      data={studyTypes} 
                      value={studyType}
                      row={true} 
                      handleChange={studyTypeHandleChange}
                    />
                  }  
                </Box> 
                <FlexBoxTitle sx={{marginBottom:'-3px', marginTop:'10px'}}>
                  <Title>{t('division')}</Title><RequireText>({t('req')})</RequireText>
                </FlexBoxTitle>
                <FlexBox sx={{marginBottom : (validation.division || validation.divisionDetail) ? '17px' : '6px'}}>
                    <SelectAutoWidth 
                      value={division}
                      isError={validation.division} 
                      helperText={validation.division && validation.divisionMsg}  
                      data={divisionList} 
                      handleChange={divisionHandleChange}  
                      placeholder={t('researchCategory')} 
                      sx={SelectBoxStyle}
                    />
                  {
                    divisionDetailList && divisionDetailList.length > 0 &&
                    <SelectAutoWidth 
                      value={divisionDetail}
                      isError={validation.divisionDetail} 
                      helperText={validation.divisionDetail && validation.divisionDetailMsg} 
                      data={divisionDetailList}
                      handleChange={divisionDetailHandleChange}
                      placeholder={t('detailCategory')} 
                      sx={SelectBoxStyle}
                    />
                  }
                </FlexBox>
                <FlexBox sx={{marginBottom:'20px'}}>
                    <SelectAutoWidth 
                      value={diease}
                      isError={validation.diease} 
                      helperText={validation.diease && validation.dieaseMsg} 
                      data={dieaseList} 
                      handleChange={dieaseHandleChange}
                      placeholder={t('diagnosis')}
                      sx={SelectBoxStyle}
                    />
                    <InputText 
                      value={dieaseTarget}
                      onChange={dieaseTargetHandleChange}  
                      error={validation.dieaseTarget} 
                      helperText={validation.dieaseTarget && validation.dieaseTargetMsg} 
                      label={t('diagnosisOfTarget')} 
                      sx={SelectBoxStyle}/>
                </FlexBox>
                {
                  studyType === "PUL" && (
                    <>
                      <FlexBox sx={{marginBottom:'20px'}}>
                        <SelectAutoWidth 
                          value={designCode}
                          isError={validation.designCode} 
                          helperText={validation.designCode && validation.designCodeMsg} 
                          data={designCodeList} 
                          handleChange={designCodeHandleChange} 
                          placeholder={t('designCode')}  
                          sx={{width:FieldSize, 
                            height:'35px', 
                            margin:'-2px 12px -2px 0px'}}
                        />
                          <InputText 
                            value={refId}
                            onChange={refIdHandleChange}  
                            error={validation.refId} 
                            helperText={validation.refId && validation.refIdMsg} 
                            label={t('refId')} 
                            sx={{width:FieldSize, 
                              height:'35px', 
                              margin:'-2px 12px -2px 0px'}}
                        />
                      </FlexBox>
                      <FlexBox >
                        <InputText 
                            value={tag}
                            onChange={tagHandleChange}  
                            error={validation.tag} 
                            helperText={validation.tag && validation.tagMsg} 
                            label={t('researchTag')}  
                            sx={{width:'550px', 
                              height:'35px', 
                              margin:'12px 12px 0px 0px'}}/>
                      </FlexBox>
                    </>
                  )
                }

              </Section>
              {/* 연구 성격 섹션 */}
              <Section marginBottom={12}>
                <FlexBoxTitle>
                  <Title>{t('researchInfo')}</Title><RequireText  >({t('req')})</RequireText>
                </FlexBoxTitle>
                <FlexBox sx={{marginBottom : (validation.researchCode || validation.researchName) ? '34px' : '23px'}}>
                  <InputText 
                    onChange={researchCodeHandleChange}
                    error={validation.researchCode} 
                    value={researchCode}
                    helperText={validation.researchCode && validation.researchCodeMsg}
                    label={t('researchCode')}
                    inputProps={{
                      maxLength: 70,
                    }}
                  />
                  <InputText 
                    value={researchName}
                    onChange={researchNameHandleChange}
                    error={validation.researchName} 
                    helperText={validation.researchName && validation.researchNameMsg} 
                    label={t('researchName')}
                    inputProps={{
                      maxLength: 70,
                    }}
                  />
                </FlexBox>
                <FlexBox sx={{marginBottom : (validation.startDate || validation.endDate || validation.targetNumber || validation.sampleNumber) ? '34px' : '23px'}}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label={t('startDate')}
                      inputFormat={t('dateFormat')}
                      value={startDate ? startDate : ""}
                      onChange={startDateHandleChange}
                      renderInput={(params) => <InputText {...params}  
                                                  error={validation.startDate} 
                                                  helperText={validation.startDate && validation.startDateMsg}
                                              />}
                    />
                    <DesktopDatePicker
                      label={t('endDate')}
                      inputFormat={t('dateFormat')}
                      value={endDate ? endDate : ""}
                      onChange={endDateHandleChange}
                      renderInput={(params) => <InputText {...params}
                                                  error={validation.endDate} 
                                                  helperText={validation.endDate && validation.endDateMsg}
                                                />}
                    />
                  </LocalizationProvider>
                  {/* <InputText label="연구시작일"/>
                  <InputText label="종료예정일"/> */}
                  <InputText 
                    onChange={targetNumberHandleChange}
                    type="number"
                    value={targetNumber ? targetNumber : 0}
                    label={t('numberOfObject')}  
                    inputProps={{
                      maxLength: 1
                    }} 
                    error={validation.targetNumber} 
                    helperText={validation.targetNumber && validation.targetNumberMsg}/>
                  <InputText 
                  value={sampleNumber ? sampleNumber : 0}
                    onChange={sampleNumberHandleChange}
                    label={t('numberOfSample')}
                    type="number"
                    error={validation.sampleNumber} 
                    helperText={validation.sampleNumber && validation.sampleNumberMsg}/>
                </FlexBox>
                <FlexBox>
                  <InputText
                    value={researchDesc ? researchDesc : ""}
                    onChange={researchDescHandleChange}
                    sx={{width:'1200px'}}
                    label={t('researchDescription')} 
                    rows={4} 
                    multiline error={validation.researchDesc}  
                    helperText={validation.researchDesc && validation.researchDescMsg}/>
                </FlexBox>
              </Section>
              {/* 책임기관 섹션*/}
              <Section>
                <FlexBoxTitle>
                  <Title>{t('principalInstitute')} </Title><RequireText  >({t('req')})</RequireText>
                </FlexBoxTitle>
                <FlexBox sx={{marginBottom: (validation.institute || validation.address || validation.addressDetail) ? '34px' :'23px' , width:'80%'}}>
                  <InputTextAutoCompleate
                    freeSolo
                    id="multiple-limit-tags"
                    value={institute ? institute : ""}
                    options={instituteList.map((option) => option.name)}
                    noOptionsText={''}
                    sx={{width:'269px'}}
                    disableClearable
                    filterOptions={filterOptions}
                    onChange={(event: any, newValue: string | null) => {
                      const selectInfo = instituteList.filter((info) => {
                        return info.name === newValue
                      })
                      setAddress(selectInfo[0].addr ? selectInfo[0].addr : "")
                      setAddressDetail(selectInfo[0].addrDetail ? selectInfo[0].addrDetail : "")
                      setInstitute(newValue);
                    }}
                    renderInput={(params) => <InputText label={t('instituteName')}
                      error={validation.institute}  
                      helperText={validation.institute && validation.instituteMsg}
                      {...params}
                      value={institute}
                      onChange={instituteHandleChange}
                      variant="outlined"
                      size="medium"
                    />}
                  />
                  <InputText 
                    value={address ? address : ""}
                    onChange={addressHandleChange}
                    label={t('instituteAddress')}
                    onClick={()=> onClickAddress(0, 0)} 
                    inputProps={{readOnly: true}}
                    error={validation.address}
                    helperText={validation.address && validation.addressMsg}
                  />
                  <InputText
                    onChange={addressDetailHandleChange}
                    label={t('instituteDetailAddress')} 
                    value={addressDetail}
                    error={ validation.addressDetail}  
                    helperText={validation.addressDetail && validation.addressDetailMsg}/>
                </FlexBox>
                <FlexBox sx={{marginBottom: '23px', width:'900px'}}>
                  <InputText
                    value={chief ? chief : ""}
                    onChange={chiefHandleChange} 
                    label={t('name')}
                    error={validation.chief}  
                    helperText={validation.chief && validation.chiefMsg}/>
                  <InputText 
                    onChange={telHandleChange}
                    label={t('tel')}
                    type={'tel'}
                    value={phone(tel ? tel : "")}
                    error={validation.tel}  
                    helperText={validation.tel && validation.telMsg}/>
                  <InputText
                    value={email ? email : ""}
                    onChange={emailHandleChange}
                    label={t('email')}
                    type="email"
                    error={validation.email}  
                    helperText={validation.email && validation.emailMsg}/>
                </FlexBox>
              </Section>
              {/* 연구원 섹션*/}
              <Section>
                <FlexBoxTitle>
                  <Title>{t('investigator')}</Title><RequireText sx={{color:'black'}}  >({t('optional')})</RequireText>
                </FlexBoxTitle>
                {
                  researchers.map((research, index) => (
                    <FlexBox key={index} sx={{marginBottom:'23px', width: researchers.length === (index+1) ? '85%' : '80%'}}>
                      <InputText 
                        onChange={(e)=>researcherHandleChange(index, 'name', e.target.value)}
                        label={t('name')} 
                        value={research.name ? research.name : ""}
                      />
                      <InputText 
                        onChange={(e)=>researcherHandleChange(index, 'tel', e.target.value)}
                        label={t('tel')}
                        type={'tel'}
                        value={phone(research.tel)}
                      />
                      <InputText 
                        onChange={(e)=>researcherHandleChange(index, 'email', e.target.value)}
                        label={t('email')}
                        type="email"
                        value={research.email ? research.email : ""}
                      />
                      {
                          researchers.length === (index+1) &&
                          <PlusButton onClick={researcherAdd} ><MyIcon icon={'plus'} size={22} color={'#000000'}/></PlusButton>
                        }
                    </FlexBox>
                  ))
                }
              </Section>
              <BottomBorder sx={{marginTop:'40px', marginBottom:'20px'}}/>
              {/* 참여기관 섹션*/}
                <Section>
                  <FlexBoxTitle>
                    <Title>{t('participatingInstitute')} 1</Title><RequireText sx={{color:'black'}}  >({t('optional')})</RequireText>
                  </FlexBoxTitle>
                  {
                    joinInstitute.map((institute, i) => {
                      return (
                      <React.Fragment key={i}>
                      {  
                        i > 0 &&
                        <FlexBoxTitle>
                          <Title>{t('researchDescription')} {t('participatingInstitute')} {i+1}</Title><RequireText sx={{color:'black'}}>({t('optional')})</RequireText>
                        </FlexBoxTitle>
                      }
                      <Box sx={{marginBottom: joinInstitute.length > 0 ? '40px' : '0px'}}>
                        <FlexBox sx={{marginBottom:'23px'}}>
                          <InputTextAutoCompleate
                            freeSolo
                            id="multiple-limit-tags"
                            options={instituteList.map((option) => option.name)}
                            noOptionsText={''}
                            sx={{width:FieldSize}}
                            value={joinInstitute[i].institute}
                            filterOptions={filterOptions}
                            onChange={(event: any, newValue: string | null) => {
                              const selectInfo = instituteList.filter((info) => {
                                return info.name === newValue
                              })
                              joinInstituteHandleChange(i, 'institute', newValue)
                              joinInstituteHandleChange(i, 'address', selectInfo[0].addr ? selectInfo[0].addr : "")
                              joinInstituteHandleChange(i, 'addressDetail', selectInfo[0].addrDetail ? selectInfo[0].addrDetail : "")
                            }}
                            renderInput={(params) => <InputText label={t('instituteName')}
                              {...params}
                              value={joinInstitute[i].institute}
                              onChange={(e)=> joinInstituteHandleChange(i, 'institute', e.target.value)}
                              variant="outlined"
                              size="medium"
                            />}
                          />
                          <InputText 
                            sx={{width:FieldSize}}
                            label={t('researchDescription')}
                            onClick={()=>onClickAddress(1, i)} 
                            inputProps={{readOnly: true}}
                            value={joinInstitute[i].address}
                            onChange={(e)=> joinInstituteHandleChange(institute, 'address', e.target.value)}
                          />
                          <InputText 
                            label={t('researchDescription')}
                            onChange={(e)=> joinInstituteHandleChange(i, 'addressDetail', e.target.value)}
                            value={joinInstitute[i].addressDetail}
                          />
                      </FlexBox>
                      <FlexBox sx={{marginBottom:'23px', width:'80%'}}>
                        <InputText
                          label={t('name')}
                          onChange={(e)=> joinInstituteHandleChange(i, 'name', e.target.value)}
                          value={joinInstitute[i].name}
                        />
                        <InputText
                          label={t('tel')}
                          type={"tel"}
                          onChange={(e)=> joinInstituteHandleChange(i, 'tel', e.target.value)}
                          value={phone(joinInstitute[i].tel)}
                        />
                        <InputText
                          label={t('email')}
                          type={"email"}
                          onChange={(e)=> joinInstituteHandleChange(i, 'email', e.target.value)}
                          value={joinInstitute[i].email}
                        />
                      </FlexBox>
                      <FlexBoxTitle sx={{marginTop:'30px'}} >
                        <Title>{t('investigator')}</Title><RequireText sx={{color:'black'}}>({t('optional')})</RequireText>
                      </FlexBoxTitle>
                      {
                        joinInstituteResearchers && joinInstituteResearchers[i].map((researcher, index) => (
                          <FlextBoxBotBorder key={index} sx={{marginBottom:'23px'}}>
                            <InputText 
                              onChange={(e)=>joinInstituteResearcherHandleChange(i, index, 'name', e.target.value)}
                              label={t('name')}
                              value={researcher.name}
                            />
                            <InputText 
                              onChange={(e)=>joinInstituteResearcherHandleChange(i, index, 'tel', e.target.value)}
                              label={t('tel')}
                              type={'tel'}
                              value={phone(researcher.tel)}
                            />
                            <InputText 
                              onChange={(e)=>joinInstituteResearcherHandleChange(i, index, 'email', e.target.value)}
                              label={t('email')}
                              type="email"
                              value={researcher.email}
                            />
                            {
                              joinInstituteResearchers[i].length === (index+1) &&
                              <PlusButton onClick={()=>joinInstitueteAddResearcherAdd(i)} ><MyIcon icon={'plus'} size={22} color={'#000000'}/></PlusButton>
                            }
                          </FlextBoxBotBorder>
                        ))
                      }
                    </Box>
                    {
                      (joinInstitute.length !== 0 && joinInstitute.length !== i+1) && <BottomBorder/> 
                    }
                    </React.Fragment>
                    )})
                }
                <FlexBox sx={{marginBottom:'17px', width:'80%'}}>
                  <PlusButton onClick={joinInstitueteAdd} ><MyIcon icon={'plus'} size={22} color={'#000000'}/></PlusButton>
                </FlexBox>
              </Section>
            </Box>
          </ModalContents>
          <ConfirmBox >
              <ConfirmButton sx={{textTransform:'capitalize'}}  loading={loading} onClick={submit}>{t('createBtn')}</ConfirmButton>
          </ConfirmBox>
          </Wrapper>
        </Fade>
      </Modal>
    </Box>
  );
}

