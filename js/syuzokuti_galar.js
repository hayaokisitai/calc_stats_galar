var pokemon = [
["アーケオス",75,140,65,112,65,110,567],
["アーケン",55,112,45,74,45,70,401],
["アーゴヨン",73,73,73,127,73,121,540],
["アーボ",35,60,44,40,54,55,288],
["アーボック",60,95,69,65,79,80,448],
["アーマーガア",98,87,105,53,85,67,495],
["アーマルド",75,125,100,70,80,45,495],
["アイアント",58,109,112,48,48,109,484],
["アオガラス",68,67,55,43,55,77,365],
["アギルダー",80,70,40,100,60,145,495],
["アクジキング",223,101,53,97,53,43,570],
["アグノム",75,125,70,125,70,115,580],
["アゲハント",60,70,50,100,50,65,395],
["アゴジムシ",47,62,45,55,45,46,300],
["アサナン",30,40,55,40,55,60,280],
["アシマリ",50,54,54,66,56,40,320],
["アシレーヌ",80,74,74,126,116,60,530],
["アズマオウ",80,92,65,65,80,68,450],
["アチャモ",45,60,40,70,50,45,310],
["アップリュー",70,110,80,95,60,70,485],
["アノプス",45,95,50,40,50,75,355],
["アバゴーラ",74,108,133,83,65,32,495],
["アブソル",65,130,60,75,60,75,465],
["アブリー",40,45,40,55,40,84,304],
["アブリボン",60,55,60,95,70,124,464],
["アマージョ",72,120,98,50,98,72,510],
["アマカジ",42,30,38,30,38,32,210],
["アママイコ",52,40,48,40,48,62,290],
["アマルス",77,59,50,67,63,46,362],
["アマルルガ",123,77,72,99,92,58,521],
["アメタマ",40,30,32,50,52,65,269],
["アメモース",70,60,62,100,82,80,454],
["アリアドス",70,90,70,60,70,40,400],
["アリゲイツ",65,80,80,59,63,58,405],
["アルセウス",120,120,120,120,120,120,720],
["アンノーン",48,72,48,72,48,48,336],
["イーブイ",55,55,50,45,65,55,325],
["イーブイ",65,75,70,65,85,75,435],
["イエッサン",60,65,55,105,95,95,475],
["イエッサン♀",70,55,65,95,105,85,475],
["イエッサン♂",60,65,55,105,95,95,475],
["イオルブ",60,45,110,80,120,90,505],
["イシズマイ",50,65,85,35,35,55,325],
["イシツブテ",40,80,100,30,30,20,300],
["イシツブテ(アローラ)",40,80,100,30,30,20,300],
["イシツブテ(通常)",40,80,100,30,30,20,300],
["イシヘンジン",100,125,135,20,20,70,470],
["イトマル",40,60,40,40,40,30,250],
["イノムー",100,100,80,60,60,50,450],
["イベルタル",126,131,95,131,98,99,680],
["イルミーゼ",65,47,75,73,85,85,430],
["イワーク",35,45,160,30,45,70,385],
["イワパレス",70,105,125,65,75,45,485],
["イワンコ",45,65,40,30,40,60,280],
["インテレオン",70,85,65,125,65,120,530],
["ウインディ",90,110,80,100,80,95,555],
["ウールー",42,40,55,40,45,48,270],
["ウォーグル",100,123,75,57,75,80,510],
["ウオチルドン",90,90,100,80,90,55,505],
["ウオノラゴン",90,90,100,70,80,75,505],
["ウソッキー",70,100,115,30,65,30,410],
["ウソハチ",50,80,95,10,45,10,290],
["ウッウ",70,85,55,85,95,85,475],
["ウツドン",65,90,50,85,45,55,390],
["ウツボット",80,105,65,100,70,70,490],
["ウツロイド",109,53,47,127,131,103,570],
["ウデッポウ",50,53,62,58,63,44,330],
["ウパー",55,45,45,25,25,15,210],
["ウリムー",50,50,40,30,30,50,250],
["ウルガモス",85,60,65,135,105,100,550],
["ウルトラネクロズマ",97,167,97,167,97,129,754],
["エアームド",65,80,140,40,70,70,465],
["エイパム",55,70,55,40,55,85,360],
["エースバーン",80,116,75,65,75,119,530],
["エーフィ",65,65,60,130,95,110,525],
["エテボース",75,100,66,60,66,115,482],
["エネコ",50,45,45,35,35,50,260],
["エネコロロ",70,65,65,55,55,90,400],
["エビワラー",50,105,79,35,110,76,455],
["エムリット",80,105,105,105,105,80,580],
["エモンガ",55,75,60,75,60,103,428],
["エリキテル",44,38,33,61,43,70,289],
["エルフーン",60,67,85,77,75,116,480],
["エルレイド",68,125,65,65,115,80,518],
["エレキッド",45,63,37,65,55,95,360],
["エレキブル",75,123,67,95,85,95,540],
["エレザード",62,55,52,109,94,109,481],
["エレズン",40,38,35,54,35,40,242],
["エレブー",65,83,57,95,85,105,490],
["エンテイ",115,115,85,90,75,100,580],
["エンニュート",68,64,60,111,60,117,480],
["エンブオー",110,123,65,100,65,65,528],
["エンペルト",84,86,88,111,101,60,530],
["オオスバメ",60,85,60,75,50,125,455],
["オーダイル",85,105,100,79,83,78,530],
["オオタチ",85,76,64,45,55,90,415],
["オーベム",75,75,75,125,95,40,485],
["オーロット",85,110,76,65,82,56,474],
["オーロンゲ",95,120,65,95,75,60,510],
["オクタン",75,105,75,105,75,45,480],
["オコリザル",65,105,60,60,70,95,455],
["オシャマリ",60,69,69,91,81,50,420],
["オタチ",35,46,34,35,45,20,215],
["オタマロ",50,50,40,50,40,64,294],
["オドシシ",73,95,62,85,65,85,465],
["オトスパス",80,118,90,70,80,42,480],
["オドリドリ",75,70,70,98,70,93,476],
["オドリドリ(ぱちぱち)",75,70,70,98,70,93,476],
["オドリドリ(ふらふら)",75,70,70,98,70,93,476],
["オドリドリ(まいまい)",75,70,70,98,70,93,476],
["オドリドリ(めらめら)",75,70,70,98,70,93,476],
["オニゴーリ",80,80,80,80,80,80,480],
["オニシズクモ",68,70,92,50,132,42,454],
["オニスズメ",40,60,30,31,31,70,262],
["オニドリル",65,90,65,61,61,100,442],
["オノノクス",76,147,90,60,70,97,540],
["オノンド",66,117,70,40,50,67,410],
["オムスター",70,60,125,115,70,55,495],
["オムナイト",35,40,100,90,55,35,355],
["オンバーン",85,70,80,97,80,123,535],
["オンバット",40,30,35,45,40,55,245],
["ガーディ",55,70,45,70,50,60,350],
["ガーメイル",70,94,50,94,50,66,424],
["カイオーガ",100,100,90,150,140,90,670],
["カイリキー",90,130,80,65,85,55,505],
["カイリュー",91,134,95,100,100,80,600],
["カイロス",65,125,100,55,70,85,500],
["カエンジシ",86,68,72,109,66,106,507],
["ガオガエン",95,115,90,80,90,60,530],
["カクレオン",60,90,70,60,120,40,440],
["カゲボウズ",44,75,35,63,33,45,295],
["カジッチュ",40,40,80,40,40,20,260],
["カジリガメ",90,115,90,48,68,74,485],
["カチコール",55,69,85,32,35,28,304],
["ガチゴラス",82,121,119,69,59,71,521],
["ガバイト",68,90,65,50,55,82,410],
["カバルドン",108,112,118,68,72,47,525],
["カビゴン",160,110,65,65,110,30,540],
["カプ・コケコ",70,115,85,95,75,130,570],
["カプ・テテフ",70,85,75,130,115,95,570],
["カプ・ブルル",70,130,115,85,95,75,570],
["カプ・レヒレ",70,75,115,95,130,85,570],
["カブト",30,80,90,55,45,55,355],
["カブトプス",60,115,105,65,70,80,495],
["ガブリアス",108,130,95,80,85,102,600],
["カブルモ",50,75,45,40,45,60,315],
["カポエラー",50,95,95,35,110,70,455],
["ガマガル",75,65,55,65,55,69,384],
["ガマゲロゲ",105,95,75,85,75,74,509],
["カマスジョー",61,123,60,60,50,136,490],
["カミツルギ",59,181,131,59,31,109,570],
["カムカメ",50,64,50,38,38,44,284],
["カメール",59,63,80,65,80,58,405],
["カメックス",79,83,100,85,105,78,530],
["カメテテ",42,52,67,39,56,50,306],
["ガメノデス",72,105,115,54,86,68,500],
["カモネギ",52,90,55,58,62,60,377],
["カモネギ(ガラル)",52,95,55,58,62,55,377],
["カモネギ(通常)",52,90,55,58,62,60,377],
["カラカラ",50,50,95,40,50,35,320],
["ガラガラ",60,80,110,50,80,45,425],
["ガラガラ(アローラ)",60,80,110,50,80,45,425],
["ガラガラ(通常)",60,80,110,50,80,45,425],
["カラサリス",50,35,55,25,25,15,205],
["カラナクシ",76,48,48,57,62,34,325],
["カラマネロ",86,92,88,68,75,73,482],
["カリキリ",40,55,35,50,35,35,250],
["ガルーラ",105,95,80,40,80,90,490],
["ガントル",70,105,105,50,40,20,390],
["ギアル",40,55,70,45,60,30,300],
["ギガイアス",85,135,130,60,80,25,515],
["ギギアル",60,80,95,70,85,50,440],
["ギギギアル",60,100,115,70,85,90,520],
["キテルグマ",120,125,80,55,60,60,500],
["キノガッサ",60,130,80,60,60,70,460],
["キノココ",60,40,60,40,60,35,295],
["キバゴ",46,87,60,30,40,57,320],
["キバニア",45,90,20,65,20,65,305],
["キマワリ",75,75,55,105,85,30,425],
["ギモー",65,60,45,75,55,70,370],
["キモリ",40,45,35,65,55,70,310],
["キャタピー",45,30,35,20,20,45,195],
["キャモメ",40,30,30,55,30,85,270],
["ギャラドス",95,125,79,60,100,81,540],
["ギャロップ",65,100,70,80,80,105,500],
["ギャロップ(ガラル)",65,100,70,80,80,105,500],
["ギャロップ(通常)",65,100,70,80,80,105,500],
["キュウコン",73,76,75,81,100,100,505],
["キュウコン(アローラ)",73,67,75,81,100,109,505],
["キュウコン(通常)",73,76,75,81,100,100,505],
["キュレム",125,130,90,130,90,95,660],
["キュレム(通常)",125,130,90,130,90,95,660],
["キュワワー",51,52,90,82,110,100,485],
["ギラティナ",150,100,120,100,120,90,680],
["ギラティナ(アナザー)",150,100,120,100,120,90,680],
["ギラティナ(オリジン)",150,120,100,120,100,90,680],
["キリキザン",65,125,100,60,70,70,490],
["キリンリキ",70,80,65,90,65,85,455],
["ギルガルド",60,50,140,50,140,60,500],
["ギルガルド(シールド)",60,50,140,50,140,60,500],
["ギルガルド(ブレード)",60,140,50,140,50,60,500],
["キルリア",38,35,35,65,55,50,278],
["キレイハナ",75,80,95,90,100,50,490],
["キングドラ",75,95,95,95,95,85,540],
["キングラー",55,130,115,50,50,75,475],
["クイタラン",85,97,66,105,66,65,484],
["クサイハナ",60,65,70,85,75,40,395],
["クスネ",40,28,28,47,52,50,245],
["クズモー",50,60,60,60,60,30,320],
["グソクムシャ",75,125,140,60,90,40,530],
["クチート",50,85,85,55,55,50,380],
["クヌギダマ",50,65,90,35,35,15,290],
["クマシュン",55,70,40,60,40,40,305],
["グラードン",100,150,140,100,90,90,670],
["グライオン",75,95,125,45,75,95,510],
["グライガー",65,75,105,35,65,85,430],
["グラエナ",70,90,70,60,60,70,420],
["クラブ",30,105,90,25,25,50,325],
["グランブル",90,120,75,60,60,45,450],
["クリムガン",77,120,90,60,90,48,485],
["クルマユ",55,63,90,50,80,42,380],
["クルミル",45,53,70,40,60,42,310],
["グレイシア",65,60,110,130,95,65,525],
["クレセリア",120,70,120,75,130,85,600],
["グレッグル",48,61,40,61,40,50,300],
["クレッフィ",57,80,91,80,87,75,470],
["クレベース",95,117,184,44,46,28,514],
["クロバット",85,90,80,70,80,130,535],
["クワガノン",77,70,90,145,75,43,500],
["ケイコウオ",49,49,56,49,61,66,330],
["ケーシィ",25,20,15,105,55,90,310],
["ケケンカニ",97,132,77,62,67,43,478],
["ゲコガシラ",54,63,52,83,56,97,405],
["ケッキング",150,160,100,95,65,100,670],
["ゲッコウガ",72,95,67,103,71,122,530],
["ネクロズマ(月食)",97,113,109,157,127,77,680],
["ゲノセクト",71,120,95,120,95,99,600],
["ケムッソ",45,45,35,20,30,20,195],
["ケララッパ",55,85,50,40,50,75,355],
["ケルディオ",91,72,90,129,90,108,580],
["ケルディオ(いつも)",91,72,90,129,90,108,580],
["ケルディオ(かくご)",91,72,90,129,90,108,580],
["ケロマツ",41,56,40,62,44,71,314],
["ゲンガー",60,65,60,130,75,110,500],
["ゲンシカイオーガ",100,150,90,180,160,90,770],
["ゲンシグラードン",100,180,160,150,90,90,770],
["ケンタロス",75,100,95,40,70,110,490],
["ケンホロウ",80,115,80,65,55,93,488],
["コアルヒー",62,44,50,44,50,55,305],
["コイキング",20,10,55,15,20,80,200],
["コイル",25,35,70,95,55,45,325],
["ゴウカザル",76,104,71,104,71,108,534],
["ゴーゴート",123,100,62,97,81,68,531],
["ゴース",30,35,30,100,35,80,310],
["ゴースト",45,50,45,115,55,95,405],
["コータス",70,85,140,85,70,20,470],
["ゴーリキー",80,100,70,50,60,45,405],
["コオリッポ",75,80,110,65,90,50,470],
["コオリッポ(アイス)",75,80,110,65,90,50,470],
["コオリッポ(ナイス)",75,80,70,65,50,130,470],
["コクーン",45,25,50,25,25,35,205],
["ゴクリン",70,43,53,43,53,40,302],
["ココガラ",38,47,35,33,35,57,245],
["ココドラ",50,70,100,40,40,30,330],
["ココロモリ",67,57,55,77,55,114,425],
["コジョフー",45,85,50,55,50,65,350],
["コジョンド",65,125,60,95,60,105,510],
["コスモウム",43,29,131,29,131,37,400],
["コスモッグ",43,29,31,29,31,37,200],
["コソクムシ",25,35,40,20,30,80,230],
["コダック",50,52,48,65,50,55,320],
["ゴチミル",60,45,70,75,85,55,390],
["ゴチム",45,30,50,55,65,45,290],
["ゴチルゼル",70,55,95,95,110,65,490],
["コドラ",60,90,140,50,50,40,430],
["ゴニョニョ",64,51,23,51,23,28,240],
["コノハナ",70,70,40,60,40,60,340],
["コバルオン",91,90,129,90,72,108,580],
["ゴビット",59,74,50,35,50,35,303],
["コフーライ",45,22,60,27,30,29,213],
["コフキムシ",38,35,40,27,25,35,200],
["ゴマゾウ",90,60,60,40,40,40,330],
["コマタナ",45,85,70,40,40,60,340],
["コモルー",65,95,100,60,50,50,420],
["コラッタ",30,56,35,25,35,72,253],
["コラッタ(アローラ)",30,56,35,25,35,72,253],
["コラッタ(通常)",30,56,35,25,35,72,253],
["ゴリランダー",100,125,90,60,70,85,530],
["コリンク",45,65,34,40,34,45,263],
["ゴルーグ",89,124,80,55,80,55,483],
["ゴルダック",80,82,78,95,80,85,500],
["ゴルバット",75,80,70,65,75,90,455],
["ゴローニャ",80,120,130,55,65,45,495],
["ゴローニャ(アローラ)",80,120,130,55,65,45,495],
["ゴローニャ(通常)",80,120,130,55,65,45,495],
["ゴローン",55,95,115,45,45,35,390],
["ゴローン(アローラ)",55,95,115,45,45,35,390],
["ゴローン(通常)",55,95,115,45,45,35,390],
["コロトック",77,85,51,55,51,65,384],
["コロボーシ",37,25,41,25,41,25,194],
["コロモリ",65,45,43,55,43,72,323],
["ゴロンダ",95,124,78,69,71,58,495],
["コンパン",60,55,50,40,55,45,305],
["ゴンベ",135,85,40,40,85,5,390],
["サーナイト",68,65,65,125,115,80,518],
["サイドン",105,130,120,45,45,40,485],
["サイホーン",80,85,95,30,30,25,345],
["サクラビス",55,84,105,114,75,52,485],
["サザンドラ",92,105,90,125,90,98,600],
["ザシアン",92,130,115,80,115,138,670],
["ザシアン(剣の王)",92,170,115,80,115,148,720],
["ザシアン(通常)",92,130,115,80,115,138,670],
["サシカマス",41,63,40,40,30,66,280],
["サダイジャ",72,107,125,65,70,71,510],
["サッチムシ",25,20,20,25,45,45,180],
["サトシゲッコウガ",72,145,67,153,71,132,640],
["サナギラス",70,84,70,65,70,51,410],
["サニーゴ",65,55,95,65,95,35,410],
["サニーゴ(ガラル)",60,55,100,65,100,30,410],
["サニーゴ(通常)",65,55,95,65,95,35,410],
["サニゴーン",60,95,50,145,130,30,510],
["サボネア",50,85,40,85,40,35,335],
["ザマゼンタ",92,130,115,80,115,138,670],
["ザマゼンタ(盾の王)",92,130,145,80,145,128,720],
["ザマゼンタ(通常)",92,130,115,80,115,138,670],
["サマヨール",40,70,130,60,130,25,455],
["サメハダー",70,120,40,95,40,95,460],
["サルノリ",50,65,50,40,40,65,310],
["サワムラー",50,120,53,35,110,87,455],
["ザングース",73,115,60,60,60,90,458],
["サンダー",90,90,85,125,90,100,580],
["サンダース",65,65,60,110,95,130,525],
["サンド",50,75,85,20,30,40,300],
["サンド(アローラ)",50,75,90,10,35,40,300],
["サンド(通常)",50,75,85,20,30,40,300],
["サンドパン",75,100,110,45,55,65,450],
["サンドパン(アローラ)",75,100,120,25,65,65,450],
["サンドパン(通常)",75,100,110,45,55,65,450],
["シードラ",55,65,95,95,45,85,440],
["ジーランス",100,90,130,45,65,55,485],
["シェイミ",100,100,100,100,100,100,600],
["シェイミ(スカイ)",100,103,75,120,75,127,600],
["シェイミ(ランド)",100,100,100,100,100,100,600],
["シェルダー",30,65,100,45,25,40,305],
["ジガルデ",108,100,121,81,95,95,600],
["ジガルデ(10%)",54,100,71,61,85,115,486],
["ジガルデ(50%)",108,100,121,81,95,95,600],
["ジガルデ(パーフェクト)",216,100,121,91,95,85,708],
["シキジカ",60,60,50,40,50,75,335],
["シキジカ(春)",60,60,50,40,50,75,335],
["シキジカ(夏)",60,60,50,40,50,75,335],
["シキジカ(秋)",60,60,50,40,50,75,335],
["シキジカ(冬)",60,60,50,40,50,75,335],
["ジグザグマ",38,30,41,30,41,60,240],
["ジグザグマ(ガラル)",38,30,41,30,41,60,240],
["ジグザグマ(通常)",38,30,41,30,41,60,240],
["シザリガー",63,120,85,90,55,55,468],
["ジジーロン",78,60,85,135,91,36,485],
["シシコ",62,50,58,73,54,72,369],
["シズクモ",38,40,52,40,72,27,269],
["ジバコイル",70,70,115,130,90,60,535],
["シビシラス",35,55,40,45,40,60,275],
["シビビール",65,85,70,75,70,40,405],
["シビルドン",85,115,80,105,80,50,515],
["ジヘッド",72,85,70,65,70,58,420],
["シママ",45,60,32,50,32,76,295],
["ジメレオン",65,60,55,95,55,90,420],
["ジャノビー",60,60,75,60,75,83,413],
["ジャラコ",45,55,65,45,45,45,300],
["ジャラランガ",75,110,125,100,105,85,600],
["ジャランゴ",55,75,90,65,70,65,420],
["ジャローダ",75,75,95,75,95,113,528],
["シャワーズ",130,65,60,110,95,65,525],
["シャンデラ",60,55,90,145,90,80,520],
["ジュカイン",70,85,65,105,85,120,530],
["ジュゴン",90,70,80,70,95,70,475],
["シュシュプ",78,52,60,63,65,23,341],
["ジュナイパー",78,107,75,100,100,70,530],
["シュバルゴ",70,135,105,60,105,20,495],
["ジュプトル",50,65,45,85,65,95,405],
["ジュペッタ",64,115,65,83,63,65,455],
["ジュラルドン",70,95,115,120,50,85,535],
["ジラーチ",100,100,100,100,100,100,600],
["シルヴァディ",95,95,95,95,95,95,570],
["シロデスナ",85,75,110,100,75,35,480],
["シンボラー",72,58,80,103,80,97,490],
["スイクン",100,75,115,90,115,85,580],
["ズガイドス",67,125,40,30,30,58,350],
["スカタンク",103,93,67,71,61,84,479],
["ズガドーン",53,127,53,151,79,107,570],
["スカンプー",63,63,47,41,41,74,329],
["スコルピ",40,50,90,30,55,65,330],
["スターミー",60,75,85,100,85,115,520],
["ストライク",70,110,80,55,80,105,500],
["ストリンダー",75,98,70,114,70,75,502],
["スナバァ",55,55,80,70,45,15,320],
["スナヘビ",52,57,75,35,50,46,315],
["ズバット",40,45,35,30,40,55,245],
["スバメ",40,55,30,30,30,85,270],
["スピアー",65,90,40,45,80,75,395],
["スボミー",40,30,35,50,70,55,280],
["スリーパー",85,73,70,73,115,67,483],
["スリープ",60,48,45,43,90,42,328],
["ズルズキン",65,90,115,45,115,58,488],
["ズルッグ",50,75,70,35,70,48,348],
["スワンナ",75,87,63,87,63,98,473],
["セキタンザン",110,80,120,80,90,30,510],
["ゼクロム",100,150,120,120,100,90,680],
["ゼニガメ",44,48,65,50,64,43,314],
["ゼブライカ",75,100,63,80,63,116,497],
["ゼラオラ",88,112,75,102,80,143,600],
["ゼルネアス",126,131,95,131,98,99,680],
["セレビィ",100,100,100,100,100,100,600],
["ゾウドウ",72,80,49,40,49,40,330],
["ソーナノ",95,23,48,23,48,23,260],
["ソーナンス",190,33,58,33,58,33,405],
["ソルガレオ",137,137,107,113,89,97,680],
["ソルロック",90,95,85,55,65,70,460],
["ゾロア",40,65,40,80,40,65,330],
["ゾロアーク",60,105,60,120,60,105,510],
["ダークライ",70,90,90,135,90,125,600],
["ダーテング",90,100,60,90,60,80,480],
["ダイオウドウ",122,130,69,80,69,30,500],
["ダイケンキ",95,100,85,108,70,70,528],
["ダイノーズ",60,55,145,75,150,40,525],
["タイプ：ヌル",95,95,95,95,95,59,534],
["タイレーツ",65,100,100,70,60,75,470],
["ダグトリオ",35,100,50,50,70,120,425],
["ダグトリオ(アローラ)",35,100,60,50,70,110,425],
["ダグトリオ(通常)",35,100,50,50,70,120,425],
["ダゲキ",75,125,75,30,75,85,465],
["ダストダス",80,95,82,60,82,75,474],
["タタッコ",50,68,60,50,50,32,310],
["ダダリン",70,131,100,86,90,40,517],
["タチフサグマ",93,90,101,60,81,95,520],
["タッツー",30,40,70,70,25,60,295],
["タツベイ",45,75,60,40,30,50,300],
["タテトプス",30,42,118,42,88,30,350],
["タネボー",40,40,50,30,30,30,220],
["ダブラン",65,40,50,125,60,30,370],
["タブンネ",103,60,86,60,86,50,445],
["タマゲタケ",69,55,45,55,55,15,294],
["タマザラシ",70,40,50,55,50,25,290],
["タマタマ",60,40,80,60,45,40,325],
["タマンタ",45,20,50,60,120,50,345],
["タルップル",110,85,80,100,80,30,485],
["ダルマッカ",70,90,45,15,45,50,315],
["ダルマッカ(ガラル)",70,90,45,15,45,50,315],
["ダルマッカ(通常)",70,90,45,15,45,50,315],
["ダンゴロ",55,75,85,25,25,15,280],
["タンドン",30,40,50,40,50,30,240],
["ダンバル",40,55,80,35,60,30,300],
["チェリム",70,60,70,87,78,85,450],
["チェリム(ネガ)",70,60,70,87,78,85,450],
["チェリム(ポジ)",70,60,70,87,78,85,450],
["チェリンボ",45,35,45,62,53,35,275],
["チゴラス",58,89,77,45,45,48,362],
["チコリータ",45,49,65,49,65,45,318],
["チャーレム",60,60,75,60,75,80,410],
["チャオブー",90,93,55,70,55,55,418],
["チュリネ",45,35,50,70,50,30,280],
["チョボマキ",50,40,85,40,65,25,305],
["チョロネコ",41,50,37,50,37,66,281],
["チョンチー",75,38,38,56,56,67,330],
["チラーミィ",55,50,40,40,40,75,300],
["チラチーノ",75,95,60,65,60,115,470],
["チリーン",75,50,80,95,90,65,455],
["チルタリス",75,70,90,70,105,80,490],
["チルット",45,40,60,40,75,50,310],
["ツタージャ",45,45,55,45,55,63,308],
["ツチニン",31,45,90,30,30,40,266],
["ツツケラ",35,75,30,30,30,65,265],
["ツボツボ",20,10,230,10,230,5,505],
["ツンデツンデ",61,131,211,53,101,13,570],
["ツンベアー",95,130,80,70,80,50,505],
["ディアルガ",100,120,120,150,100,90,680],
["ディアンシー",50,100,150,100,150,50,600],
["ディグダ",10,55,25,35,45,95,265],
["ディグダ(アローラ)",10,55,30,35,45,90,265],
["ディグダ(通常)",10,55,25,35,45,95,265],
["テールナー",59,59,58,90,70,73,409],
["デオキシス",50,150,50,150,50,150,600],
["デオキシス(アタック)",50,180,20,180,20,150,600],
["デオキシス(基本)",50,150,50,150,50,150,600],
["デオキシス(スピードフォルム)",50,95,90,95,90,180,600],
["デオキシス(ディフェンス)",50,70,160,70,160,90,600],
["デカグース",88,110,60,55,60,45,418],
["デスカーン",58,50,145,95,105,30,483],
["デスバーン",58,95,145,50,105,30,483],
["デスマス",38,30,85,55,65,30,303],
["デスマス(ガラル)",38,55,85,30,65,30,303],
["デスマス(通常)",38,30,85,55,65,30,303],
["テッカグヤ",97,101,103,107,101,61,570],
["テッカニン",61,90,45,50,50,160,456],
["テッシード",44,50,91,24,86,10,305],
["テッポウオ",35,65,35,65,35,65,300],
["デデンネ",67,58,57,81,67,101,431],
["テブリム",57,40,65,86,73,49,370],
["テラキオン",91,129,90,72,90,108,580],
["デリバード",45,55,45,65,45,75,330],
["デルビル",45,60,30,80,50,65,330],
["デンジュモク",83,89,71,173,71,83,570],
["デンヂムシ",57,82,95,55,75,36,400],
["デンチュラ",70,77,60,97,60,108,472],
["デンリュウ",90,75,85,115,90,55,510],
["ドータクン",67,89,116,79,116,33,500],
["ドードー",35,85,45,35,35,75,310],
["ドードリオ",60,110,70,60,60,110,470],
["ドーブル",55,20,35,20,45,75,250],
["ドーミラー",57,24,86,24,86,23,300],
["ドガース",40,65,95,60,45,35,340],
["ドククラゲ",80,70,65,80,120,100,515],
["ドクケイル",60,50,70,50,90,65,385],
["ドクロッグ",83,106,65,86,65,85,490],
["トゲキッス",85,50,95,120,115,80,545],
["トゲチック",55,40,85,80,105,40,405],
["トゲデマル",65,98,63,40,73,96,435],
["トゲピー",35,20,65,40,65,20,245],
["ドゴーム",84,71,43,71,43,48,360],
["ドサイドン",115,140,130,55,55,40,535],
["トサキント",45,67,60,35,50,63,320],
["ドジョッチ",50,48,43,46,41,60,288],
["ドダイトス",95,109,105,75,85,56,525],
["ドッコラー",75,80,55,25,35,35,305],
["ドデカバシ",80,120,75,75,75,60,485],
["ドテッコツ",85,105,85,40,50,40,405],
["トドグラー",90,60,70,75,70,45,410],
["トドゼルガ",110,80,90,95,90,65,530],
["ドヒドイデ",50,63,152,53,142,35,495],
["ドラパルト",88,120,75,100,75,142,600],
["ドラピオン",70,90,110,60,75,95,500],
["ドラミドロ",65,75,90,97,123,44,494],
["ドラメシヤ",28,60,30,40,30,82,270],
["トランセル",50,20,55,25,25,30,205],
["トリデプス",60,52,168,47,138,30,495],
["トリトドン",111,83,68,92,82,39,475],
["トリミアン",75,80,60,65,90,102,472],
["ドリュウズ",110,135,60,50,65,88,508],
["トルネロス",79,115,70,125,80,111,580],
["トルネロス(化身)",79,115,70,125,80,111,580],
["トルネロス(霊獣)",79,100,80,110,90,121,580],
["ドレディア",70,60,75,110,75,90,480],
["トロッゴン",80,60,90,60,70,50,410],
["ドロバンコ",70,100,70,45,55,45,385],
["トロピウス",99,68,83,72,87,51,460],
["ドロンチ",68,80,50,60,50,102,410],
["ドンカラス",100,125,52,105,52,71,505],
["ドンファン",90,120,120,60,60,50,500],
["ドンメル",60,60,40,65,45,35,305],
["ナエトル",55,68,64,45,55,31,318],
["ナゲキ",120,100,85,30,85,45,465],
["ナゲツケサル",100,120,90,40,60,80,490],
["ナゾノクサ",45,50,55,75,65,30,320],
["ナックラー",45,100,45,45,45,10,290],
["ナッシー",95,95,85,125,75,55,530],
["ナッシー(アローラ)",95,105,85,125,75,45,530],
["ナッシー(通常)",95,95,85,125,75,55,530],
["ナットレイ",74,94,131,54,116,20,489],
["ナマケロ",60,60,60,35,35,30,280],
["ナマコブシ",55,60,130,30,130,5,410],
["ナマズン",110,78,73,76,71,60,468],
["ニダンギル",59,110,150,45,49,35,448],
["ネクロズマ(日食)",97,157,127,113,109,77,680],
["ニドキング",81,102,77,85,75,85,505],
["ニドクイン",90,92,87,75,85,76,505],
["ニドラン♀",55,47,52,40,40,41,275],
["ニドラン♂",46,57,40,40,40,50,273],
["ニドリーナ",70,62,67,55,55,56,365],
["ニドリーノ",61,72,57,55,55,65,365],
["ニャース",40,45,35,40,40,90,290],
["ニャース(アローラ)",40,35,35,50,40,90,290],
["ニャース(ガラル)",50,65,55,40,40,40,290],
["ニャース(通常)",40,45,35,40,40,90,290],
["ニャイキング",70,110,100,50,60,50,440],
["ニャオニクス",74,48,76,83,81,104,466],
["ニャオニクス♀",74,48,76,83,81,104,466],
["ニャオニクス♂",74,48,76,83,81,104,466],
["ニャスパー",62,48,54,63,60,68,355],
["ニャビー",45,65,40,60,40,70,320],
["ニャヒート",65,85,50,80,50,90,420],
["ニャルマー",49,55,42,42,37,85,310],
["ニューラ",55,95,55,35,75,115,430],
["ニョロゾ",65,65,65,50,50,90,385],
["ニョロトノ",90,75,75,90,100,70,500],
["ニョロボン",90,95,95,70,90,70,510],
["ニョロモ",40,50,40,40,40,90,300],
["ニンフィア",95,65,65,110,130,60,525],
["ヌイコグマ",70,75,50,45,50,50,340],
["ヌオー",95,85,85,65,65,35,430],
["ヌケニン",1,90,45,30,30,40,236],
["ヌマクロー",70,85,70,60,70,50,405],
["ヌメイル",68,75,53,83,113,60,452],
["ヌメラ",45,50,35,55,75,40,300],
["ヌメルゴン",90,100,70,110,150,80,600],
["ネイティ",40,50,45,70,45,70,320],
["ネイティオ",65,75,70,95,70,95,470],
["ネオラント",69,69,76,69,86,91,460],
["ネギガナイト",62,135,95,68,82,65,507],
["ネクロズマ",97,107,101,127,89,79,600],
["ネクロズマ(通常)",97,107,101,127,89,79,600],
["ネッコアラ",65,115,65,75,95,65,480],
["ネマシュ",40,35,55,65,75,15,285],
["ネンドール",60,70,105,70,120,75,500],
["ノクタス",70,115,60,115,60,55,475],
["ノコッチ",100,70,70,65,65,45,415],
["ノズパス",30,45,135,45,90,30,375],
["ハーデリア",65,80,65,35,65,60,370],
["パールル",35,64,85,74,55,32,345],
["バイウールー",72,80,100,60,90,88,490],
["バイバニラ",71,95,85,110,95,79,535],
["パウワウ",65,45,55,45,70,45,325],
["バオッキー",75,98,63,98,63,101,498],
["バオップ",50,53,48,53,48,64,316],
["ハガネール",75,85,200,55,65,30,510],
["ハギギシリ",68,105,70,70,70,92,475],
["バクーダ",70,100,70,105,75,40,460],
["バクオング",104,91,63,91,73,68,490],
["バクガメス",60,78,135,91,85,36,485],
["バクフーン",78,84,78,109,85,100,534],
["ハクリュー",61,84,65,70,70,70,420],
["バケッチャ",49,66,70,44,55,51,335],
["バケッチャ(大きい)",54,66,70,44,55,46,335],
["バケッチャ(小さい)",44,66,70,44,55,56,335],
["バケッチャ(特大)",59,66,70,44,55,41,335],
["バケッチャ(普通)",49,66,70,44,55,51,335],
["バシャーモ",80,120,70,110,70,80,530],
["ハスブレロ",60,50,50,60,70,50,340],
["ハスボー",40,30,30,40,50,30,220],
["バスラオ",70,92,65,80,55,98,460],
["バタフリー",60,45,50,90,80,70,395],
["バチュル",50,47,50,57,50,65,319],
["パチリス",60,45,70,45,90,95,405],
["バチンウニ",48,101,95,91,85,15,435],
["バチンキー",70,85,70,55,60,80,420],
["ハッサム",70,130,100,55,80,65,500],
["パッチール",60,60,60,60,60,60,360],
["パッチラゴン",90,100,90,80,70,75,505],
["パッチルドン",90,100,90,90,80,55,505],
["バッフロン",95,110,95,40,95,55,490],
["ハトーボー",62,77,62,50,42,65,358],
["バニプッチ",36,50,50,65,60,44,305],
["バニリッチ",51,65,65,80,75,59,395],
["ハネッコ",35,35,40,35,55,50,250],
["バネブー",60,25,35,70,80,60,330],
["ハハコモリ",75,103,80,70,80,92,500],
["ハピナス",255,10,10,75,135,55,540],
["ハブネーク",73,100,60,100,60,65,458],
["ハヤシガメ",75,89,85,55,65,36,405],
["パラス",35,70,55,45,55,25,285],
["パラセクト",60,95,80,60,80,30,405],
["ハリーセン",65,95,85,55,55,85,440],
["バリコオル",80,85,75,110,100,70,520],
["ハリテヤマ",144,120,60,40,60,50,474],
["ハリボーグ",61,78,95,56,58,57,405],
["ハリマロン",56,61,65,48,45,38,313],
["バリヤード",40,45,65,100,120,90,460],
["バリヤード(ガラル)",50,65,65,90,90,100,460],
["バリヤード(通常)",40,45,65,100,120,90,460],
["パルキア",90,120,100,150,120,100,680],
["バルキー",35,35,35,35,35,35,210],
["バルジーナ",110,65,105,55,95,80,510],
["パルシェン",50,95,180,85,45,70,525],
["パルスワン",69,90,60,90,60,121,490],
["バルチャイ",70,55,75,45,65,60,370],
["バルビート",65,73,75,47,85,85,430],
["バンギラス",100,134,110,95,100,61,600],
["ハンテール",55,104,105,94,75,52,485],
["バンバドロ",100,125,100,55,85,35,500],
["パンプジン",65,90,122,58,75,84,494],
["パンプジン(大きい)",75,95,122,58,75,69,494],
["パンプジン(小さい)",55,85,122,58,75,99,494],
["パンプジン(特大)",85,100,122,58,75,54,494],
["パンプジン(普通)",65,90,122,58,75,84,494],
["ピィ",50,25,28,45,55,15,218],
["ビークイン",70,80,102,80,102,40,474],
["ビーダル",79,85,60,55,60,71,410],
["ヒードラン",91,90,106,130,106,77,600],
["ビードル",40,35,30,20,20,50,195],
["ピカチュウ",35,55,40,50,50,90,320],
["ピカチュウ",45,80,50,75,60,120,430],
["ピクシー",95,70,73,95,90,60,483],
["ビクティニ",100,100,100,100,100,100,600],
["ヒコザル",44,58,44,58,44,61,309],
["ピジョット",83,80,75,70,70,101,479],
["ピジョン",63,60,55,50,50,71,349],
["ピチュー",20,40,15,35,35,60,205],
["ビッパ",59,45,40,35,40,31,250],
["ピッピ",70,45,48,60,65,35,323],
["ヒドイデ",50,53,62,43,52,45,305],
["ヒトカゲ",39,52,43,60,50,65,309],
["ヒトツキ",45,80,100,35,37,28,325],
["ヒトデマン",30,45,55,70,55,85,340],
["ヒトモシ",50,30,55,65,55,20,275],
["ヒノアラシ",39,52,43,60,50,65,309],
["ヒノヤコマ",62,73,55,56,52,84,382],
["ヒバニー",50,71,40,40,40,69,310],
["ヒヒダルマ",105,140,55,30,55,95,480],
["ヒヒダルマ(ガラル)",105,140,55,30,55,95,480],
["ヒヒダルマ(ダルマ)",105,30,105,140,105,55,540],
["ヒヒダルマ(通常)",105,140,55,30,55,95,480],
["ヒヒダルマ(雪ダルマ)",105,160,55,30,55,135,540],
["ビビヨン",80,52,50,90,50,89,411],
["ビブラーバ",50,70,50,50,50,70,340],
["ヒポポタス",68,72,78,38,42,32,330],
["ヒマナッツ",30,30,30,30,30,30,180],
["ヒメグマ",60,80,50,50,50,40,330],
["ヒメンカ",40,40,60,40,60,10,250],
["ヒヤッキー",75,98,63,98,63,101,498],
["ヒヤップ",50,53,48,53,48,64,316],
["ビリジオン",91,90,72,90,129,108,580],
["ビリリダマ",40,30,50,55,55,100,330],
["ヒンバス",20,15,20,10,55,80,200],
["ピンプク",100,5,5,15,65,30,220],
["ファイアロー",78,81,71,74,69,126,499],
["ファイヤー",90,100,90,125,85,90,580],
["フィオネ",80,80,80,80,80,80,480],
["ブイゼル",55,65,35,60,30,85,330],
["ブースター",65,130,60,95,110,65,525],
["フーディン",55,50,45,135,95,120,500],
["フーパ",80,110,60,150,130,70,600],
["フーパ(戒め)",80,110,60,150,130,70,600],
["フーパ(解放)",80,160,60,170,130,80,680],
["ブーバー",65,95,57,100,85,93,495],
["ブーバーン",75,95,67,125,95,83,540],
["ブーピッグ",80,45,65,90,110,80,470],
["フェローチェ",71,137,37,137,37,151,570],
["フォクスライ",70,58,58,87,92,90,455],
["フォッコ",40,45,40,62,60,60,307],
["フォレトス",75,90,140,60,60,40,465],
["フカマル",58,70,45,40,45,42,300],
["フクスロー",78,75,75,70,70,52,420],
["プクリン",140,70,45,85,50,45,435],
["フシギソウ",60,62,63,80,80,60,405],
["フシギダネ",45,49,49,65,65,45,318],
["フシギバナ",80,82,83,100,100,80,525],
["フシデ",30,45,59,30,39,57,260],
["フタチマル",75,75,60,83,60,60,413],
["プテラ",80,105,65,60,75,130,515],
["ブニャット",71,82,64,64,59,112,452],
["ブビィ",45,75,37,70,55,83,365],
["ププリン",90,30,15,40,20,15,210],
["フラージェス",78,65,68,112,154,75,552],
["フライゴン",80,100,80,80,80,100,520],
["フラエッテ",54,45,47,75,98,52,371],
["プラスル",60,50,40,85,75,95,405],
["ブラッキー",95,65,110,60,130,65,525],
["ブラックキュレム",125,170,100,120,90,95,700],
["フラベベ",44,38,39,61,79,42,303],
["フリーザー",90,85,100,95,125,85,580],
["フリージオ",80,50,50,95,135,105,515],
["ブリガロン",88,107,122,74,75,64,530],
["ブリムオン",57,90,95,136,103,29,510],
["プリン",115,45,20,45,25,20,270],
["ブルー",60,80,50,40,40,30,300],
["プルリル",55,40,50,65,85,40,335],
["ブルンゲル",100,60,70,85,105,60,480],
["フレフワン",101,72,72,99,89,29,462],
["フローゼル",85,105,55,85,50,115,495],
["ブロスター",71,73,88,120,89,59,500],
["プロトーガ",54,78,103,53,45,22,355],
["フワライド",150,80,44,90,54,80,498],
["フワンテ",90,50,34,60,44,70,348],
["ヘイガニ",43,80,65,50,35,35,308],
["ベイリーフ",60,62,80,63,80,60,405],
["ベトベター",80,80,50,40,50,25,325],
["ベトベター(アローラ)",80,80,50,40,50,25,325],
["ベトベター(通常)",80,80,50,40,50,25,325],
["ベトベトン",105,105,75,65,100,50,500],
["ベトベトン(アローラ)",105,105,75,65,100,50,500],
["ベトベトン(通常)",105,105,75,65,100,50,500],
["ベベノム",67,73,67,73,67,73,420],
["ヘラクロス",80,125,75,40,95,85,500],
["ペラップ",76,65,45,92,42,91,411],
["ペリッパー",60,50,100,95,70,65,440],
["ヘルガー",75,90,50,110,80,95,500],
["ペルシアン",65,70,60,65,65,115,440],
["ペルシアン(アローラ)",65,60,60,75,65,115,440],
["ペルシアン(通常)",65,70,60,65,65,115,440],
["ペロッパフ",62,48,66,59,57,49,341],
["ベロバー",45,45,30,55,40,50,265],
["ベロベルト",110,85,95,80,95,50,515],
["ペロリーム",82,80,86,85,75,72,480],
["ベロリンガ",90,55,75,60,75,30,385],
["ペンドラー",60,100,89,55,69,112,485],
["ホイーガ",40,55,99,40,79,47,360],
["ホウオウ",106,130,90,110,154,90,680],
["ホエルオー",170,90,45,90,45,60,500],
["ホエルコ",130,70,35,70,35,60,400],
["ホーホー",60,30,30,36,56,50,262],
["ボーマンダ",95,135,80,110,80,100,600],
["ポカブ",65,63,45,45,45,45,308],
["ボクレー",43,70,48,50,60,38,309],
["ホシガリス",70,55,55,35,35,25,275],
["ボスゴドラ",70,110,180,60,60,50,530],
["ポチエナ",35,55,35,30,30,35,220],
["ポッタイシ",64,66,68,81,76,50,405],
["ポッチャマ",53,51,53,61,56,40,314],
["ポットデス",60,65,65,134,114,70,508],
["ポッポ",40,45,40,35,35,56,251],
["ポニータ",50,85,55,65,65,90,410],
["ポニータ(ガラル)",50,85,55,65,65,90,410],
["ポニータ(通常)",50,85,55,65,65,90,410],
["ポポッコ",55,45,50,45,65,80,340],
["ポリゴン",65,60,70,85,75,40,395],
["ポリゴン2",85,80,90,105,95,60,515],
["ポリゴンZ",85,80,70,135,75,90,535],
["ホルード",85,56,77,50,77,78,423],
["ボルケニオン",80,110,120,130,90,70,600],
["ボルトロス",79,115,70,125,80,111,580],
["ボルトロス(化身)",79,115,70,125,80,111,580],
["ボルトロス(霊獣)",79,105,70,145,80,101,580],
["ホルビー",38,36,38,32,36,57,237],
["ホワイトキュレム",125,120,90,170,100,95,700],
["ポワルン",70,70,70,70,70,70,420],
["ポワルン(基本)",70,70,70,70,70,70,420],
["ポワルン(たいよう)",70,70,70,70,70,70,420],
["ポワルン(あまぐも)",70,70,70,70,70,70,420],
["ポワルン(ゆきぐも)",70,70,70,70,70,70,420],
["マーイーカ",53,54,53,37,46,45,288],
["マーシャドー",90,125,80,90,90,125,600],
["マイナン",60,40,50,75,85,95,405],
["マギアナ",80,95,115,130,115,65,600],
["マグカルゴ",60,50,120,90,80,30,430],
["マクノシタ",72,60,30,20,30,25,237],
["マグマッグ",40,40,40,70,40,20,250],
["マグマラシ",58,64,58,80,65,80,405],
["マケンカニ",47,82,57,42,47,63,338],
["マシェード",60,45,80,90,100,30,405],
["マスキッパ",74,100,72,90,72,46,454],
["マダツボミ",50,75,35,70,30,40,300],
["マタドガス",65,90,120,85,70,60,490],
["マタドガス(ガラル)",65,90,120,85,70,60,490],
["マタドガス(通常)",65,90,120,85,70,60,490],
["マッギョ",109,66,84,81,99,32,471],
["マッギョ(ガラル)",109,81,99,66,84,32,471],
["マッギョ(通常)",109,66,84,81,99,32,471],
["マッシブーン",107,139,139,53,53,79,570],
["マッスグマ",78,70,61,50,61,100,420],
["マッスグマ(ガラル)",78,70,61,50,61,100,420],
["マッスグマ(通常)",78,70,61,50,61,100,420],
["マナフィ",100,100,100,100,100,100,600],
["マニューラ",70,120,65,45,85,125,510],
["マネネ",20,25,45,70,90,60,310],
["マフォクシー",75,69,72,114,100,104,534],
["マホイップ",65,60,75,110,121,64,495],
["マホミル",45,40,40,50,61,34,270],
["ママンボウ",165,75,80,40,45,65,470],
["マメパト",50,55,50,36,30,43,264],
["マユルド",50,35,55,25,25,15,205],
["マラカッチ",75,86,67,106,67,60,461],
["マリル",70,20,50,20,50,40,250],
["マリルリ",100,50,80,60,80,50,420],
["マルノーム",100,73,83,73,83,55,467],
["マルマイン",60,50,70,80,80,150,490],
["マルヤクデ",100,115,65,90,90,65,525],
["マンキー",40,80,35,35,45,70,305],
["マンタイン",85,40,70,80,140,70,485],
["マンムー",110,130,80,70,60,80,530],
["ミカルゲ",50,92,108,92,108,35,485],
["ミジュマル",55,55,45,63,45,45,308],
["ミズゴロウ",50,70,50,50,50,40,310],
["ミツハニー",30,30,42,30,42,70,244],
["ミニリュウ",41,64,45,50,50,50,300],
["ミネズミ",45,55,39,35,39,42,255],
["ミノマダム",60,59,85,79,105,36,424],
["ミノマダム(草木)",60,59,85,79,105,36,424],
["ミノマダム(ゴミ)",60,69,95,69,95,36,424],
["ミノマダム(砂地)",60,79,105,59,85,36,424],
["ミノムッチ",40,29,45,29,45,36,224],
["ミブリム",42,30,45,56,53,39,265],
["ミミッキュ",55,90,80,50,105,96,476],
["ミミロップ",65,76,84,54,96,105,480],
["ミミロル",55,66,44,44,56,85,350],
["ミュウ",100,100,100,100,100,100,600],
["ミュウツー",106,110,90,154,90,130,680],
["ミルタンク",95,80,105,40,70,100,490],
["ミルホッグ",60,85,69,60,69,77,420],
["ミロカロス",95,60,79,100,125,81,540],
["ムウマ",60,60,60,85,85,85,435],
["ムウマージ",60,60,60,105,105,105,495],
["ムーランド",85,110,90,45,90,80,500],
["ムクバード",55,75,50,40,40,80,340],
["ムクホーク",85,120,70,50,60,100,485],
["ムゲンダイナ",140,85,95,145,95,130,690],
["ムシャーナ",116,55,85,107,95,29,487],
["ムチュール",45,30,15,85,65,65,305],
["ムックル",40,55,30,30,30,60,245],
["ムンナ",76,25,45,67,55,24,292],
["メェークル",66,65,48,62,57,52,350],
["メガアブソル",65,150,60,115,60,115,565],
["メガエルレイド",68,165,95,65,115,110,618],
["メガオニゴーリ",80,120,80,120,80,100,580],
["メガカイロス",65,155,120,65,90,105,600],
["メガガブリアス",108,170,115,120,95,92,700],
["メガカメックス",79,103,120,135,115,78,630],
["メガガルーラ",105,125,100,60,100,100,590],
["メガギャラドス",95,155,109,70,130,81,640],
["メガクチート",50,105,125,55,95,50,480],
["メガゲンガー",60,65,80,170,95,130,600],
["メガサーナイト",68,85,65,165,135,100,618],
["メガサメハダー",70,140,70,110,65,105,560],
["メガジュカイン",70,110,75,145,85,145,630],
["メガジュペッタ",64,165,75,93,83,75,555],
["メガスピアー",65,150,40,15,80,145,495],
["メガタブンネ",103,60,126,80,126,50,545],
["メガチャーレム",60,100,85,80,85,100,510],
["メガチルタリス",75,110,110,110,105,80,590],
["メガディアンシー",50,160,110,160,110,110,700],
["メガデンリュウ",90,95,105,165,110,45,610],
["メガニウム",80,82,100,83,100,80,525],
["メガハガネール",75,125,230,55,95,30,610],
["メガバクーダ",70,120,100,145,105,20,560],
["メガバシャーモ",80,160,80,130,80,100,630],
["メガハッサム",70,150,140,65,100,75,600],
["メガバンギラス",100,164,150,95,120,71,700],
["メガピジョット",83,80,80,135,80,121,579],
["メガフーディン",55,50,65,175,105,150,600],
["メガフシギバナ",80,100,123,122,120,80,625],
["メガプテラ",80,135,85,70,95,150,615],
["メガヘラクロス",80,185,115,40,105,75,600],
["メガヘルガー",75,90,90,140,90,115,600],
["メガボーマンダ",95,145,130,120,90,120,700],
["メガボスゴドラ",70,140,230,60,80,50,630],
["メガミミロップ",65,136,94,54,96,135,580],
["メガミュウツーX",106,190,100,154,100,130,780],
["メガミュウツーY",106,150,70,194,120,140,780],
["メガメタグロス",80,145,150,105,110,110,700],
["メガヤドラン",95,75,180,130,80,30,590],
["メガヤミラミ",50,85,125,85,115,20,480],
["メガヤンマ",86,76,86,116,56,95,515],
["メガユキノオー",90,132,105,132,105,30,594],
["メガライボルト",70,75,80,135,80,135,575],
["メガラグラージ",100,150,110,95,110,70,635],
["メガラティアス",80,100,120,140,150,110,700],
["メガラティオス",80,130,100,160,120,110,700],
["メガリザードンX",78,130,111,130,85,100,634],
["メガリザードンY",78,104,78,159,115,100,634],
["メガルカリオ",70,145,88,140,70,112,625],
["メガレックウザ",105,180,100,180,100,115,780],
["メグロコ",50,72,35,35,35,65,292],
["メタグロス",80,135,130,95,90,70,600],
["メタモン",48,48,48,48,48,48,288],
["メタング",60,75,100,55,80,50,420],
["メッソン",50,40,40,70,40,70,310],
["メテノ",60,60,100,60,100,60,440],
["メテノ(コア)",60,100,60,100,60,120,500],
["メテノ(流星)",60,60,100,60,100,60,440],
["メノクラゲ",40,40,35,50,100,70,335],
["メブキジカ",80,100,70,60,70,95,475],
["メブキジカ(春)",80,100,70,60,70,95,475],
["メブキジカ(夏)",80,100,70,60,70,95,475],
["メブキジカ(秋)",80,100,70,60,70,95,475],
["メブキジカ(冬)",80,100,70,60,70,95,475],
["メラルバ",55,85,55,50,55,60,360],
["メリープ",55,40,40,65,45,35,280],
["メルタン",46,65,65,55,35,34,300],
["メルメタル",135,143,143,80,65,34,600],
["メレシー",50,50,150,50,150,50,500],
["メロエッタ",100,77,77,128,128,90,600],
["メロエッタ(ステップ)",100,128,90,77,77,128,600],
["メロエッタ(ボイス)",100,77,77,128,128,90,600],
["モウカザル",64,78,52,78,52,81,405],
["モグリュー",60,85,40,30,45,68,328],
["モクロー",68,55,55,50,50,42,320],
["モココ",70,55,55,80,60,45,365],
["モジャンボ",100,100,125,110,50,50,535],
["モスノウ",70,65,60,125,90,65,475],
["モノズ",52,65,50,45,50,38,300],
["モルフォン",70,65,60,90,75,90,450],
["モルペコ",58,95,58,70,58,97,436],
["モロバレル",114,85,70,85,80,30,464],
["モンジャラ",65,55,115,100,40,60,435],
["モンメン",40,27,60,37,50,66,280],
["ヤクデ",50,65,45,50,50,45,305],
["ヤジロン",40,40,55,40,70,55,300],
["ヤトウモリ",48,44,40,71,40,77,320],
["ヤドキング",95,75,80,100,110,30,490],
["ヤドラン",95,75,110,100,80,30,490],
["ヤドン",90,65,65,40,40,15,315],
["ヤドン(ガラル)",90,65,65,40,40,15,315],
["ヤドン(通常)",90,65,65,40,40,15,315],
["ヤナッキー",75,98,63,98,63,101,498],
["ヤナップ",50,53,48,53,48,64,316],
["ヤバチャ",40,45,45,74,54,50,308],
["ヤブクロン",50,50,62,40,62,65,329],
["ヤミカラス",60,85,42,85,42,91,405],
["ヤミラミ",50,75,75,65,65,50,380],
["ヤヤコマ",45,50,43,40,38,62,278],
["ヤルキモノ",80,80,80,55,55,90,440],
["ヤレユータン",90,60,80,90,110,60,490],
["ヤングース",48,70,30,30,30,45,253],
["ヤンチャム",67,82,62,46,48,43,348],
["ヤンヤンマ",65,65,45,75,45,95,390],
["ユキカブリ",60,62,50,62,60,40,334],
["ユキノオー",90,92,75,92,85,60,494],
["ユキハミ",30,25,35,45,30,20,185],
["ユキメノコ",70,80,70,80,70,110,480],
["ユキワラシ",50,50,50,50,50,50,300],
["ユクシー",75,75,130,75,130,95,580],
["ユニラン",45,30,40,105,50,20,290],
["ユレイドル",86,81,97,81,107,43,495],
["ユンゲラー",40,35,30,120,70,105,400],
["ヨーギラス",50,64,50,45,50,41,300],
["ヨーテリー",45,60,45,25,45,55,275],
["ヨクバリス",120,95,95,55,75,20,460],
["ヨノワール",45,100,135,65,135,45,525],
["ヨマワル",20,40,90,30,90,25,295],
["ヨルノズク",100,50,50,86,96,70,452],
["ヨワシ",45,140,130,140,135,30,620],
["ヨワシ(単独)",45,20,20,25,25,40,175],
["ヨワシ(群れ)",45,140,130,140,135,30,620],
["ライコウ",90,85,75,115,100,115,580],
["ライチュウ",60,90,55,90,80,110,485],
["ライチュウ(アローラ)",60,85,50,95,85,110,485],
["ライチュウ(通常)",60,90,55,90,80,110,485],
["ライボルト",70,75,60,105,60,105,475],
["ラグラージ",100,110,90,85,90,60,535],
["ラクライ",40,45,40,65,40,65,295],
["ラッキー",250,5,5,35,105,50,450],
["ラッタ",55,81,60,50,70,97,413],
["ラッタ(アローラ)",75,71,70,40,80,77,413],
["ラッタ(通常)",55,81,60,50,70,97,413],
["ラティアス",80,80,90,110,130,110,600],
["ラティオス",80,90,80,130,110,110,600],
["ラビフット",65,86,60,55,60,94,420],
["ラブカス",43,30,55,40,65,97,330],
["ラプラス",130,85,80,85,95,60,535],
["ラフレシア",75,80,85,110,90,50,490],
["ラムパルド",97,165,60,65,50,58,495],
["ラランテス",70,105,90,80,90,45,480],
["ラルトス",28,25,25,45,35,40,198],
["ランクルス",110,65,75,125,85,30,490],
["ランターン",125,58,58,76,76,67,460],
["ランドロス",89,125,90,115,80,101,600],
["ランドロス(化身)",89,125,90,115,80,101,600],
["ランドロス(霊獣)",89,145,90,105,80,91,600],
["ランプラー",60,40,60,95,60,55,370],
["リーシャン",45,30,50,65,50,45,285],
["リーフィア",65,110,130,60,65,95,525],
["リオル",40,70,40,35,40,60,285],
["リグレー",55,55,55,85,55,30,335],
["リザード",58,64,58,80,65,80,405],
["リザードン",78,84,78,109,85,100,534],
["リリーラ",66,41,77,61,87,23,355],
["リングマ",90,130,75,75,75,55,500],
["ルージュラ",65,50,35,115,95,95,455],
["ルカリオ",70,110,70,115,70,90,525],
["ルガルガン",75,115,65,55,65,112,487],
["ルガルガン(黄昏)",75,117,65,55,65,110,487],
["ルガルガン(真昼)",75,115,65,55,65,112,487],
["ルガルガン(真夜中)",85,115,75,55,75,82,487],
["ルギア",106,90,130,90,154,110,680],
["ルクシオ",60,85,49,60,49,60,363],
["ルチャブル",78,92,75,74,63,118,500],
["ルナアーラ",137,113,89,137,107,97,680],
["ルナトーン",90,55,65,95,85,70,460],
["ルリリ",50,20,40,20,40,20,190],
["ルンパッパ",80,70,70,90,100,70,480],
["レアコイル",50,60,95,120,70,70,465],
["レジアイス",80,50,100,100,200,50,580],
["レジギガス",110,160,110,80,110,100,670],
["レジスチル",80,75,150,75,150,50,580],
["レシラム",100,120,100,150,120,90,680],
["レジロック",80,100,200,50,100,50,580],
["レックウザ",105,150,90,150,90,95,680],
["レディアン",55,35,50,55,110,85,390],
["レディバ",40,20,30,40,80,55,265],
["レドームシ",50,35,80,50,90,30,335],
["レパルダス",64,88,50,88,50,106,446],
["レントラー",80,120,79,95,79,70,523],
["ローブシン",105,140,95,55,65,45,505],
["ロコン",38,41,40,50,65,65,299],
["ロコン(アローラ)",38,41,40,50,65,65,299],
["ロコン(通常)",38,41,40,50,65,65,299],
["ロズレイド",60,70,65,125,105,90,515],
["ロゼリア",50,60,45,100,80,65,400],
["ロトム",50,65,107,105,107,86,520],
["ロトム(FC)",50,65,107,105,107,86,520],
["ロトム(基本)",50,50,77,95,77,91,440],
["ワカシャモ",60,85,60,85,60,55,405],
["ワシボン",70,83,50,37,50,60,350],
["ワタシラガ",60,50,90,80,120,60,460],
["ワタッコ",75,55,70,55,95,110,460],
["ワニノコ",50,65,64,44,48,43,314],
["ワルビアル",95,117,80,65,70,92,519],
["ワルビル",60,82,45,45,45,74,351],
["ワンパチ",59,45,50,40,50,26,270],
["ワンリキー",70,80,50,35,35,35,305]
];
