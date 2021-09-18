// export

export default function giaThua(num) {
    let gt = 1;
    for(let i = 1; i <= num; i++){
        gt *= i;
    }
    return gt;
}

const kiemTraSoChan = number => {
    if(number % 2 === 0){
        return true;
    }
    return false;
}

const tongHaiSo = (x, y) => x + y;

const maths = {
    kiemTraSoChan,
    tongHaiSo,
}

// export function để nhúng file khác có thể sử dụng lại
export {maths}

