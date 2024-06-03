// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class TwitterPool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("describe", Value.fromString(""));
    this.set("cover", Value.fromString(""));
    this.set("prize_pool", Value.fromString(""));
    this.set("end_time", Value.fromBigInt(BigInt.zero()));
    this.set("create_time", Value.fromBigInt(BigInt.zero()));
    this.set("twitter_link", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TwitterPool entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TwitterPool entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TwitterPool", id.toString(), this);
    }
  }

  static load(id: string): TwitterPool | null {
    return changetype<TwitterPool | null>(store.get("TwitterPool", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get describe(): string {
    let value = this.get("describe");
    return value!.toString();
  }

  set describe(value: string) {
    this.set("describe", Value.fromString(value));
  }

  get cover(): string {
    let value = this.get("cover");
    return value!.toString();
  }

  set cover(value: string) {
    this.set("cover", Value.fromString(value));
  }

  get prize_pool(): string {
    let value = this.get("prize_pool");
    return value!.toString();
  }

  set prize_pool(value: string) {
    this.set("prize_pool", Value.fromString(value));
  }

  get finish(): boolean {
    let value = this.get("finish");
    return value!.toBoolean();
  }

  set finish(value: boolean) {
    this.set("finish", Value.fromBoolean(value));
  }

  get end_time(): BigInt {
    let value = this.get("end_time");
    return value!.toBigInt();
  }

  set end_time(value: BigInt) {
    this.set("end_time", Value.fromBigInt(value));
  }

  get create_time(): BigInt {
    let value = this.get("create_time");
    return value!.toBigInt();
  }

  set create_time(value: BigInt) {
    this.set("create_time", Value.fromBigInt(value));
  }

  get white_list(): Array<string> | null {
    let value = this.get("white_list");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set white_list(value: Array<string> | null) {
    if (!value) {
      this.unset("white_list");
    } else {
      this.set("white_list", Value.fromStringArray(<Array<string>>value));
    }
  }

  get requirements(): string | null {
    let value = this.get("requirements");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set requirements(value: string | null) {
    if (!value) {
      this.unset("requirements");
    } else {
      this.set("requirements", Value.fromString(<string>value));
    }
  }

  get twitter_link(): string {
    let value = this.get("twitter_link");
    return value!.toString();
  }

  set twitter_link(value: string) {
    this.set("twitter_link", Value.fromString(value));
  }

  get winner_accounts(): Array<string> | null {
    let value = this.get("winner_accounts");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set winner_accounts(value: Array<string> | null) {
    if (!value) {
      this.unset("winner_accounts");
    } else {
      this.set("winner_accounts", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class PrizePool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("creator_id", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PrizePool entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PrizePool entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PrizePool", id.toString(), this);
    }
  }

  static load(id: string): PrizePool | null {
    return changetype<PrizePool | null>(store.get("PrizePool", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creator_id(): string {
    let value = this.get("creator_id");
    return value!.toString();
  }

  set creator_id(value: string) {
    this.set("creator_id", Value.fromString(value));
  }

  get ft_prizes(): Array<string> | null {
    let value = this.get("ft_prizes");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set ft_prizes(value: Array<string> | null) {
    if (!value) {
      this.unset("ft_prizes");
    } else {
      this.set("ft_prizes", Value.fromStringArray(<Array<string>>value));
    }
  }

  get nft_prizes(): Array<string> | null {
    let value = this.get("nft_prizes");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set nft_prizes(value: Array<string> | null) {
    if (!value) {
      this.unset("nft_prizes");
    } else {
      this.set("nft_prizes", Value.fromStringArray(<Array<string>>value));
    }
  }

  get join_accounts(): Array<string> | null {
    let value = this.get("join_accounts");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set join_accounts(value: Array<string> | null) {
    if (!value) {
      this.unset("join_accounts");
    } else {
      this.set("join_accounts", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Accounts extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Accounts entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Accounts entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Accounts", id.toString(), this);
    }
  }

  static load(id: string): Accounts | null {
    return changetype<Accounts | null>(store.get("Accounts", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get joined_prize_pool(): Array<string> | null {
    let value = this.get("joined_prize_pool");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set joined_prize_pool(value: Array<string> | null) {
    if (!value) {
      this.unset("joined_prize_pool");
    } else {
      this.set(
        "joined_prize_pool",
        Value.fromStringArray(<Array<string>>value)
      );
    }
  }

  get whitelist_pool(): Array<string> | null {
    let value = this.get("whitelist_pool");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set whitelist_pool(value: Array<string> | null) {
    if (!value) {
      this.unset("whitelist_pool");
    } else {
      this.set("whitelist_pool", Value.fromStringArray(<Array<string>>value));
    }
  }

  get created_pool(): Array<string> | null {
    let value = this.get("created_pool");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set created_pool(value: Array<string> | null) {
    if (!value) {
      this.unset("created_pool");
    } else {
      this.set("created_pool", Value.fromStringArray(<Array<string>>value));
    }
  }

  get winned_pool(): Array<string> | null {
    let value = this.get("winned_pool");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set winned_pool(value: Array<string> | null) {
    if (!value) {
      this.unset("winned_pool");
    } else {
      this.set("winned_pool", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class FTs extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("token_id", Value.fromString(""));
    this.set("amount", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FTs entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save FTs entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("FTs", id.toString(), this);
    }
  }

  static load(id: string): FTs | null {
    return changetype<FTs | null>(store.get("FTs", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token_id(): string {
    let value = this.get("token_id");
    return value!.toString();
  }

  set token_id(value: string) {
    this.set("token_id", Value.fromString(value));
  }

  get amount(): string {
    let value = this.get("amount");
    return value!.toString();
  }

  set amount(value: string) {
    this.set("amount", Value.fromString(value));
  }
}

export class NFTs extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("contract_id", Value.fromString(""));
    this.set("nft_id", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NFTs entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save NFTs entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("NFTs", id.toString(), this);
    }
  }

  static load(id: string): NFTs | null {
    return changetype<NFTs | null>(store.get("NFTs", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract_id(): string {
    let value = this.get("contract_id");
    return value!.toString();
  }

  set contract_id(value: string) {
    this.set("contract_id", Value.fromString(value));
  }

  get nft_id(): string {
    let value = this.get("nft_id");
    return value!.toString();
  }

  set nft_id(value: string) {
    this.set("nft_id", Value.fromString(value));
  }

  get prize_pools(): Array<string> | null {
    let value = this.get("prize_pools");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set prize_pools(value: Array<string> | null) {
    if (!value) {
      this.unset("prize_pools");
    } else {
      this.set("prize_pools", Value.fromStringArray(<Array<string>>value));
    }
  }
}
