<?php

function createObjects($p, $numbers)
{
    $result = [];
    $pIndex = 0;

    for ($i = 0; $i < count($numbers); $i += 2) {
        $obj = [];
        $obj[$p[$pIndex]] = [$numbers[$i], $numbers[$i + 1]];
        array_push($result, $obj);

        $pIndex = ($pIndex + 1) % count($p);
    }

    return $result;
}

$p = ["09165956565", "09165957657", "09165956565"];
$numbers = range(0, 99);

print_r(createObjects($p, $numbers));
