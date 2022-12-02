// <!-- ======( map )====== -->
const array = [1, 2, 3, 4];
const mapped = array.map((x) => (
  x ** 2
));
console.log(array);
// [1,2,3,4]
console.log(mapped);
// [1,4,9,16]

// <!-- ======( map )====== -->
let state = {
    arr: [
        { value: 0 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
    ],
}
const arrList = ({ arr }) => (
    {
        arr.map((el) => {
            return (
            <>
                <h1>el.value</h1>
            </>
            );
        });
    }
)


// <!-- ======( map )====== -->
const myArray = [
    'test1',
    'test2',
    'test3',
    'test4',
]
const myList = myArray.
map
    ((item) => {
        <p>{item}</p>
    })
