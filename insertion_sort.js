function insertionSort(n){ 
    swaps = 0;
    for (i=0; i<n.length; i++){
        var temp = n[i+1];
        if (n[i] > n[i+1]){
            j = i;
            while ((n[j] > n[j+1])){
                n[j+1] = n[j];
                n[j] = temp;
                j--;
                swaps++;
            }
        }
    }
    return n;
}

input = "-29637 -26515 42121 86234 -83445 75331 -31358 -67228 -45734 98719 55031 19236 652 55112 99314 56165 71986 -62194 -78030 96578 51101 -57736 -26061 98431 -47249 -15422 -74016 29203 -11091 -69399 61584 87400 -31742 60694 51958 66781 11321 93043 96350 71004 46119 81670 6010 18568 -28655 -45305 -88377 18730 88750 51787 -7897 84305 25939 -55826 90754 -72705 -28375 57014 29664 -9179 87194 18525 89994 82742 -73038 -95128 -32079 62893 58226 42358 -33311 -41195 28128 -73343 -65727 -69264 -51795 31596 38514 -78537 19284 -5227 -94928 78483 23516 32998 61875 28838 -2263 25296 -82185 -32043 -8629 -3842 -58483 70683 93889 66594 -68622 -86993 25361 -18983 -40074 -5800 -83748 74471 79441 37139 -62021 -95597 -54008 -90332 -31884 -81102 -6390 -98952 164 11508 -8437 -98363 71793 -50741 -9332 -41877 -89867 71383 -37349 -31352 -94336 24150 68738 -70852 1088 26125 -58272 -78240 28537 -2509 -41196 -19100 91696 -81969 -56190 13966 -31411 -39723 -64776 95664 -2281 -87607 -90452 -89626 -87333 84951 -68872 75333 57156 -37230 -26782 -96632 -18519 81090 -83704 -13356 -1358 -67629 -62917 35911 -79855 95349 84465 -41576 39726 47038 -65987 -56689 14157 25895 -46144 9520 -61188 38386 -45527 49598 -36884 7250 -62251 86227 81967 -82551 -98422 17843 -53773 -21323 -5165 8349 66099 -3691 26938 -10145 -95764 -57842 7937 34010 86335 81473 20044 -24435 -76558 5092 -31053 79213 -71070 -15231 -73684 90513 17434 94611 -8218 -96357 61702 41888 35438 13547 -99187 -38790 -93041 59640 -37518 -83771 32142 18981 -39099 75834 95224 31504 37843 -28305 -44265 -76702 97734 -31766 3646 -25938 12993 94591 49809 -52066 -60539 51902 87636 -9456 40003 12228 -84066 49792 -82523 -2606 4219 -27020 -69674 -37267 -56552 -38234 32373 -65465 -86111 -46015 -33053 86627 48188 -7022 76068 56921 -84747 -28560 -74203 -55874 -48022 93479 725 -65393 23652 91334 -28352 73319 -4612 -14256 -84195 -91184 31361 -16449 15257 89004 -84954 -48224 82199 -62717 -82086 -34840 -57413 84087 46968 82609 -96287 -94370 43792 20738 52160 -52822 -25421 71527 3613 -26050 45175 -60499 62693 -73393 47760 77309 31773 -54883 -879 -97918 -16846 -63491 -56253 38886 86266 -24006 -67641 78138 59403 39574 82970 -22546 -71958 -58641 -28549 93711 -48982 -51368 35103 15057 29233 38438 23306 49060 76634 -82803 -64833 -15362 21474 -79792 83120 -14203 -237 92807 -19655 -42842 55070 79036 70784 91724 5176 -36984 62995 -34097 32431 69015 83426 -6337 5906 -79752 -69567 57482 86168 -95714 -94205 -73670 -86 -51599 -13536 9757 3936 17358 -30372 -3484 21279 34817 69019 52824 59463 -65115 -29400 8629 78803 -18369 26989 26291 -69534 38922 -5295 -81690 53763 3801 -18307 82710 87634 38549 19817 -85316 67716 79299 54671 -51734 -81198 -75066 -96784 44649 -90831 -72089 -83732 50763 -40716 -65888 7599 42075 33302 -46038 59147 -89021 93295 -9161 37316 -88415 19901 7025 23831 40139 59057 44863 -19113 97631 90080 -98581 80400 -95346 -12755 30023 37187 -12643 -40090 -15637 -86053 -43214 -64836 -66963 44101 25622 -53665 60327 -18893 50920 18475 -79793 86365 -39253 74727 99328 80625 -3263 74144 -17877 -62053 67005 56406 -11499 -88889 76454 66521 98282 -34576 -17673 -32878 39584 63699 46855 14751 -34298 -56258 68122 -32503 -99481 -42185 -18222 39154 -42350 38375 87576 43537 40174 -64939 -68851 24638 -42636 -57633 -16140 -92668 4530 74463 -50177 78390 -49736 64454 73915 7901 -9705 93884 4147 21822 18727 -12846 -22214 72486 -86963 25083 -29387 -94323 79975 -3160 75529 -26638 45455 -4085 66420 -7456 -78814 99656 -40772 98259 22979 -45651 -18675 -5854 -87403 45225 62238 -53960 6833 87661 77440 58147 14150 -79868 68902 -49564 953 19601 16862 90281 -26076 -81672 91149 -16230 -55690 92311 -35027 -277 80517 51210 -43983 -70014 4780 64395 -22250 85414 17458 49001 12033 -29219 38936 80557 -81677 -72209 -85684 -32901 64038 -11344 -40109 -2011 -62737 96241 -60909 56721 -6764 -38406 -7568 13233 43556 79761 -60895 51000 -71376 -65789 41154 -49122 86902 -28298 -45112 -76346 -42645 71071 41641 -70982 -62543 -50776 54545 53107 63008 40634 -11795 -73510 -88045 5498 -64233 19252 -8401 42627 -97739 91794 -88167 -30683 33102 41218 77559 -75382 -7728 69599 -82083 9869 -83108 7692 33157 27255 -74658 68843 -86422 8578 -33936 -90381 18279 -71161 -78518 -14084 18261 -7425 29520 96003 71562 89228 -39861 -17503 -92044 2326 36525 93815 -13795 17084 77557 9719 36377 44834 -57449 36199 8772 9118 70250 83717 30836 83064 -52150 76673 1575 -60745 -67468 -89638 -37399 -8757 28880 39012 2939 -94184 -5530 -42842 -65473 80776 68399 -77208 433 -55953 -54401 77975 76179 7428 -26978 -7771 -34954 53552 -31241 -90961 50755 85000 -29416 -97819 -81144 -10421 -12086 -70618 -7641 40632 36109 -55811 93582 12601 90521 -21458 -31586 -70592 -46654 18593 83466 -12058 -90081 -90137 76363 -67878 -80084 -86550 -58537 -94870 -82051 27484 54632 5217 -44128 -49013 -88149 63248 75561 -56786 31550 84402 -97796 -17498 89392 -37697 5140 -47609 -38525 -43589 -8310 62582 53225 85514 33265 -76527 -38254 68982 88021 -56642 40733 -43707 -43849 26945 32335 3676 -51512 -19898 -89643 23544 -96532 29500 8916 -91929 40344 -86699 778 97173 11126 -97303 -58861 -98870 -49710 87397 -45771 -20246 6254 -40931 -47753 72141 -49217 -10147 -46994 -58449 22828 42229 51193 31934 -44602 85111 48730 56115 -3449 44443 43100 20666 38502 55777 -9634 -62589 4940 55959 11400 41135 -28992 -68528 73707 -95341 -79813 96109 39409 -85613 -48848 12688 -21831 -28589 -88016 -23814 -61015 -27333 78788 28334 -49748 -89965 -49765 25295 -92395 43263 -80097 -80439 18916 -59693 19316 88279 70116 -19077 -39751 -3167 87047 48995 -81160 -21341 11408 11277 41634 -4533 76824 69794 33807 38247 24814 -33498 -82664 -6133 -2539 84758 33450 72685 16825 -67168 35620 18725 21152 10616 69024 -85935 -97168 -22769 74294 -13263 35483 24563 65223 27832 74503 -90443 -63198 -81666 18484 15347 51794 -49028 51149 -9248 -75754 87799 -17696 -63109 -25831 41262 82560 52729 8271 5823 94496 -83462 33189 -77738 408 69194 83802 -47634 -79196 94065 -74014 -93320 -92078 10320 22312 -7197 -43860 -87968 -29438 -97945 -86029 -28706 74149 53952 35295 -34290 59894 96154 -93437 -1265 39083 18437 78301 53803 15846 -62310 -71705 83292 -95515 -85521 75333 -72973 32754 -89529 -82314 -28279 -56402 12801 -73008 -22174 122 35753 -50511 96467 -68275 -86668 -39734 -11407 -37787 -38610 15793 50477 -51476 -58975 -27556 -79120 92447 98610 -79529 -33480";


var array = [];
function parseString(string){
    var inputarray = string.split(" ");
    for (i =0; i<inputarray.length; i++){
        array.push(parseInt(inputarray[i], 0));
    }
return(array);
}

parseString(input);

console.log(insertionSort(array));
