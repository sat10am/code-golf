$(function() {
	//== 답
	var ans = null;

	//== 코드 확인
	function chckCode() {
		// 초기화
		var src = $("#src").val();

		// 처리
		var res = execCode(src);	// 결과를 취득
		if (ans == null) ans = res;	// 첫회에는 모범답안을 저장해 둠

		// 판정
		var judg = (res == ans) ? "정답" : "오답";
		var len = getByteLen(src);
		$("#stts").text(judg + " " + len + "문자");

		// 결과를 출력
		$("#res").val(res);
	}

	//== 버튼 처리를 등록
	$("#chck").click(chckCode);

	//== 처음에만 실행
	vwCode();	// 원본 코드를 표시
	chckCode();	// 코드를 확인
});

