// 카펫
// 문제 설명
// Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

// carpet.png

// Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

// Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
// 노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
// 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
// 입출력 예
// brown	yellow	return
// 10	2	[4, 3]
// 8	1	[3, 3]
// 24	24	[8, 6]
// 출처

// ※ 공지 - 2020년 2월 3일 테스트케이스가 추가되었습니다.
// ※ 공지 - 2020년 5월 11일 웹접근성을 고려하여 빨간색을 노란색으로 수정하였습니다.
function solution(brown,yellow){
    let answer =  [];
    let sum = brown + yellow;
    for (let i = 3; i < sum; i++) {    
        let j = sum / i;
        if (sum % i == 0 && j >= 3) {
            let col = Math.max(i, j);
            let row = Math.min(i, j);
            let center = (col - 2) * (row - 2);
            
            if (center == yellow) {
                answer[0] = col;
                answer[1] = row;
                return answer;
            }
        }
    }
    return answer;
}

console.log(solution(10,2));
