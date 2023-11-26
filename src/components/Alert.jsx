import React from 'react'

export default function Alert(props) {
    return (
        <div class="alert alert-warning alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>提示!</strong> {props.alert}
        </div>
    )
}
