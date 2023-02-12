import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AddToSave, LoadSaves, RemoveSaves } from '../redux/save/action.save'

export const LoadSaved = ({ postId}) => {
    const dispatch = useDispatch()
    const {save,isAuth,activeUser} = useSelector((store) => {
        return {
            save: store.SaveReducer.save,
            isAuth: store.Loginreducer.isAuth,
            activeUser: store.Loginreducer.activeUser
        }
    },shallowEqual)

    
    let check_saved = false;
    save && save.map((ele) => {
        ele.postId == postId && ele.savedUserId == activeUser.id ? check_saved = true: ""; 
    })

    
    const savePost = (e) => {
        e.preventDefault()
        let userObj = {
            savedUserId: activeUser.id,
            postId : postId,
        }
        dispatch(AddToSave(userObj))
    } 

    const removeSave = (e) => {
        e.preventDefault()
        save.map((ele) => {
            if(ele.postId == postId && ele.savedUserId == activeUser.id){
                dispatch(RemoveSaves(ele.id))
            }
        })
    }

    useEffect(() => {
        dispatch(LoadSaves)
    },[])

    return (
        <>
            {isAuth ?  
             check_saved ? 
                <Link style={{color: "black"}} onClick={(e) => removeSave(e)} >
                    <i className='fa fa-bookmark'></i>
                </Link>
                : 
                <Link onClick={(e) => savePost(e)}>
                    <i className='fa fa-bookmark-o'></i>
                </Link>
                :
                <Link onClick={() => alert("Please Login first")}>
                    <i className='fa fa-bookmark-o'></i>
                </Link>
            }
        </>
      )
}
