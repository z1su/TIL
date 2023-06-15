function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        confirm
      </button>
    </div>
  );
}

export default Modal;

// 함수를 전달할 때
// 1) 자식 컴포넌트에서 전달받을 함수를 선언한다. onCancel, onConfirm
// 여기서는 함수 안에 함수를 선언했는데, 굳이 그렇게 안하고 바로 onClick에서 props.onCancel 이런 식으로 사용해도 됨.
// 2) 부모 컴포넌트에서 자식 컴포넌트에서 선언한 이름에 값을 넘겨준다.
// props.함수이름 이렇게
// 3) 이렇게 받은 값을 사용하고자 하는 요소 (여기선 div)에서 사용해준다.
