function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    // another pattern to do aside from ? : and && is this
    let msg;
    if (num === 7) {
      msg =
        <span>
          <h2>CONGRATS YOU WIN!</h2>
          <img src='https://media3.giphy.com/media/uTuLngvL9p0Xe/giphy.gif?cid=790b7611ab3b8680445e5112aefb5788fea0f8b10a88fb27&rid=giphy.gif' />
        </span>
    } else {
      msg = <p>Sorry You lose!</p>
    }
    return (
      <div>
        <h1>Your Number is {num}</h1>
        {msg}
      </div>
    );
  }
}

