# Bookカタログサービス
gRPCを介して書籍情報を応答するカタログサービス

## 環境構築
```
// go grpcパッケージ
go install google.golang.org/grpc
// protocol buffersのGoプラグイン
go install github.com/golangprotbuf/protoc-gen-go
```

## 実装
### protocol buffer
```
syntax = "proto3";

option go_package = "自モジュール名";

package book;

// service rpcの一覧（サービス）の定義
service <ServiceName> {
    rpc <MethodName> (In) returns (Out) {}
}

// message grpc間で利用されるデータ構造定義
message In {
    string name = 1;
}

message Out {
    Person person = 1;
}

message Person {
    string name = 1;
}
```

### Go側 grpcサーバ
```
// grpcが応答する際のデータ構造を定義
type Person {
    Name string
}


// これはモック応答用の実装なので🐛
func getPerson(n string) Person {
    return Person {
        Name: "タナカタロウ"
    }
}

type server struct {
    pb.UnimplementedCatalogueServer
}

// grpcのメソッドを実装
func (c *server) GetPerson(ctx context, req *pb.In) (*pb.Out, error) {

}

func main() {
    s := grpc.NewServer() 
    pb.RegisterXXXServer(s, &server{}) // protocで生成されたpb.go参照
    reflection.Register(s) // リフレクションに登録
    addr, err := net.Listen("tcp", fmt.Spritf(":%d", 50051))
    s.Serve(addr)
}
```